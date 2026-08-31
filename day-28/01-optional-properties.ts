// ============================================
// DAY 28 - 01: OPTIONAL PROPERTIES
// ============================================
// A property marked with `?` may be present or absent entirely —
// this is different from a property that's always present but
// might hold `undefined` as a value.

interface UserProfile {
  id: number;
  email: string;
  phoneNumber?: string; // optional — may not exist on the object at all
  bio?: string;
}

const profile1: UserProfile = {
  id: 1,
  email: "vineet@example.com",
}; // ✅ valid — phoneNumber and bio are simply omitted

const profile2: UserProfile = {
  id: 2,
  email: "aman@example.com",
  phoneNumber: "9999999999",
};

console.log(profile1, profile2);

// --------------------------------------------
// Safely reading an optional property
// --------------------------------------------
function describeProfile(profile: UserProfile): string {
  // Optional chaining (`?.`) avoids a crash if the property is missing
  const phone = profile.phoneNumber ?? "not provided";
  return `${profile.email} - phone: ${phone}`;
}

console.log(describeProfile(profile1)); // "... - phone: not provided"
console.log(describeProfile(profile2)); // "... - phone: 9999999999"

// --------------------------------------------
// Optional parameters vs optional properties
// --------------------------------------------
// Same `?` syntax, different context: here it's a function parameter.
function createProfile(email: string, bio?: string): UserProfile {
  return { id: Date.now(), email, bio };
}

console.log(createProfile("new@example.com"));

export {};
