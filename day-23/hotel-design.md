# Day 24 — Designing a Hotel Booking Database

> Module: Backend Development — System Design / Database Design Practice
> Topic: Design the database schema and booking flow for a hotel reservation system (e.g. Booking.com / OYO style)

---

## 1. Requirements

**Functional**
- Hotels have multiple **room types** (Deluxe, Suite, etc.), each with its own inventory count and price
- Guests search hotels by city/location, dates, guest count, price range
- Guests book one or more rooms of a room type for a date range (no overbooking)
- Payments processed per booking (supports partial refunds on cancellation)
- Guests can cancel/modify bookings per hotel cancellation policy
- Reviews/ratings per hotel
- Hotel admin manages room inventory, pricing, availability

**Non-functional**
- Read-heavy (search/browse >> writes), but booking writes need strong consistency
- No overbooking — must never sell more rooms of a type than physically exist for a given night
- Scale: thousands of hotels, high search QPS around peak travel seasons
- Pricing changes dynamically by date (weekday/weekend/season/demand)

**Key difference vs. Airbnb model**
- Airbnb: 1 property = 1 unit, availability is boolean per date.
- Hotel: 1 hotel has many **room types**, each room type has a **count of rooms** (inventory), so availability is a *quantity* per date, not a boolean — this changes the schema and the overbooking-prevention logic.

---

## 2. Core Entities

- **Hotel**
- **RoomType** (belongs to a hotel — e.g. "Deluxe King")
- **RoomInventory** (count of rooms of a type available per date)
- **Booking**
- **BookingRoom** (line item: which room type, how many rooms, for which booking)
- **Payment**
- **Guest (User)**
- **Review**
- **Amenity**

---

## 3. ER Diagram

```mermaid
erDiagram
    HOTEL ||--o{ ROOM_TYPE : offers
    HOTEL ||--o{ REVIEW : receives
    HOTEL }o--o{ AMENITY : has
    ROOM_TYPE ||--o{ ROOM_INVENTORY : "tracked per date"
    ROOM_TYPE ||--o{ BOOKING_ROOM : "booked as"
    USER ||--o{ BOOKING : makes
    BOOKING ||--|{ BOOKING_ROOM : contains
    BOOKING ||--|| PAYMENT : has
    USER ||--o{ REVIEW : writes
    BOOKING ||--o{ REVIEW : generates

    HOTEL {
        uuid id PK
        string name
        string address
        decimal lat
        decimal lng
        int star_rating
    }
    ROOM_TYPE {
        uuid id PK
        uuid hotel_id FK
        string name
        int max_occupancy
        decimal base_price
        int total_rooms
    }
    ROOM_INVENTORY {
        uuid id PK
        uuid room_type_id FK
        date date
        int rooms_available
        decimal price_override
    }
    USER {
        uuid id PK
        string name
        string email
        enum role
    }
    BOOKING {
        uuid id PK
        uuid guest_id FK
        uuid hotel_id FK
        date check_in
        date check_out
        enum status
        decimal total_price
        timestamp created_at
    }
    BOOKING_ROOM {
        uuid id PK
        uuid booking_id FK
        uuid room_type_id FK
        int quantity
        decimal price_per_night
    }
    PAYMENT {
        uuid id PK
        uuid booking_id FK
        decimal amount
        enum status
        string provider_txn_id
        timestamp paid_at
    }
    REVIEW {
        uuid id PK
        uuid booking_id FK
        uuid author_id FK
        uuid hotel_id FK
        int rating
        text comment
    }
    AMENITY {
        uuid id PK
        string name
    }
```

---

## 4. Key Design Decisions

**Preventing overbooking (the core hard problem)**
- `ROOM_INVENTORY(room_type_id, date)` holds `rooms_available` as a **decrementing counter**, not a boolean.
- On booking: run a transaction that checks `rooms_available >= requested_qty` for every date in the stay, then decrements it — guarded by `SELECT ... FOR UPDATE` (row lock) or an atomic `UPDATE ... WHERE rooms_available >= qty` (optimistic, single statement — safer under high concurrency, avoids long lock hold times).
- On cancellation: increment `rooms_available` back for the cancelled date range.
- At high scale, funnel booking attempts for the same `(room_type_id, date)` through a queue or per-key lock (Redis) to avoid contention/deadlocks during flash-sale-like demand spikes.

**Why `BOOKING_ROOM` as a separate table**
- One booking can include multiple room types/quantities (e.g. 2 Deluxe + 1 Suite for a group), and each line item can have its own negotiated/date-based price — a single `BOOKING` row can't capture that.

**Pricing**
- `ROOM_INVENTORY.price_override` allows per-date dynamic pricing (weekday/weekend/season/demand-based) without touching `ROOM_TYPE.base_price`, which is the fallback/default.

**Search performance**
- Same pattern as Airbnb: keep Postgres/MySQL as source of truth, sync hotel/room-type/availability summaries into Elasticsearch via CDC for fast filtered search (location, dates, price, amenities).
- Precompute a lightweight "min available rooms across the stay range" per hotel in the search index so search doesn't hit the transactional DB for every query.

**Cancellations & refunds**
- `Booking.status` (pending → confirmed → cancelled/completed) plus a cancellation policy reference on `Hotel` or `RoomType` determines refund %; `Payment` can have a linked `refund_amount` and `refund_status`.

**Scaling**
- Partition `ROOM_INVENTORY` and `BOOKING` by date range or hotel region as data grows — inventory rows grow as `room_types × dates`, so this table is the biggest write/read hotspot.
- Cache hotel detail + current availability summary (Redis), invalidate on booking/cancellation.

---

## 5. Booking Flow Diagram

```mermaid
flowchart TD
    A[Guest searches hotels by city + dates] --> B[Search Service<br/>queries Elasticsearch]
    B --> C[Guest selects hotel + room type + qty]
    C --> D{Inventory Service<br/>checks rooms_available<br/>for each date in range}
    D -- insufficient --> E[Show error, suggest<br/>other room types/dates]
    D -- sufficient --> F[Begin transaction:<br/>decrement rooms_available<br/>create pending Booking + BookingRoom]
    F --> G[Payment Service<br/>charges guest]
    G -- success --> H[Confirm Booking]
    G -- failure --> I[Rollback: restore<br/>rooms_available, cancel booking]
    H --> J[Notify guest + hotel admin]
    H --> K[CDC syncs updated<br/>availability to Search Index]
```

---

## 6. Interview Talking Points
- Why quantity-based inventory instead of individual room-unit tracking? → simpler at scale; most OTAs don't assign a physical room until check-in, they just sell against a count per room type.
- How do you prevent two guests from booking the last room simultaneously? → atomic conditional `UPDATE` on `rooms_available`, or row-level locking inside a transaction; discuss optimistic vs pessimistic locking tradeoffs.
- How would you extend this for a multi-night stay spanning inventory changes mid-stay (e.g. a rate change on day 3)? → each date row in `ROOM_INVENTORY` has its own price, `BOOKING_ROOM` can reference the stay range and pricing is summed per-night at booking time.
- Airbnb vs Hotel schema difference: boolean availability per unit vs. count-based inventory per room type — walk through why that changes the whole booking transaction logic.