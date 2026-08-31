// ============================================
// DAY 30 - 03: GENERIC CLASSES
// ============================================
// A class can declare a type parameter once, then use it
// consistently across every property and method.

class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

const numberBox = new Box<number>(42);
console.log(numberBox.getValue()); // 42
numberBox.setValue(100);
console.log(numberBox.getValue()); // 100

const stringBox = new Box<string>("hello");
console.log(stringBox.getValue()); // "hello"
// numberBox.setValue("oops"); // ❌ Error — this Box is locked to <number>

// --------------------------------------------
// A backend-flavored example: a generic API response wrapper
// --------------------------------------------
class ApiResponse<T> {
  constructor(
    public success: boolean,
    public data: T,
    public message: string = "OK"
  ) {}

  static ok<T>(data: T): ApiResponse<T> {
    return new ApiResponse(true, data);
  }
}

interface UserDto {
  id: number;
  email: string;
}

const response = ApiResponse.ok<UserDto>({ id: 1, email: "vineet@example.com" });
console.log(response.success, response.data.email);

export {};
