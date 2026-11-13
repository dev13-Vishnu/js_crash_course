// Gathers all arguments passed into a 'nums' array
function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100
//-------------------------------------------------------------------------------------------------------------------------
//Combining Named parameters with
function formatLog(level, timestamp, ...messages) {
  console.log(`[${level.toUpperCase()}] ${timestamp}:`, messages.join(" "));
}

formatLog("info", "12:00 PM", "User", "logged", "in", "successfully");
// Output: [INFO] 12:00 PM: User logged in successfully
//-------------------------------------------------------------------------------------------------------------------------
//Rest operator in object destructuring
//Capturing remaing object properties.
const userRecord = {
  id: 101,
  username: "alice99",
  email: "alice@example.com",
  role: "admin",
  status: "active",
};

// Extracts 'id' and 'email', collects all remaining keys into 'payload'
const { id, email, ...payload } = userRecord;
console.log(id); // 101
console.log(email); // "alice@example.com"
console.log(payload); // { username: "alice99", role: "admin", status: "active" }
//-------------------------------------------------------------------------------------------------------------------------
// Object omission/ immutability patterns

const responseData = {
  id: 402,
  title: "Post Item",
  __v: 0, // Internal metadata to exclude
  _internalId: 99, // Internal metadata to exclude
};

// Cleanly strip internal keys
const { __v, _internalId, ...cleanData } = responseData;

console.log(cleanData); // { id: 402, title: "Post Item" }
//-------------------------------------------------------------------------------------------------------------------------
// Rest Operation in Array Destructuring
//Capturing remaining array elements.
const items = ["apple", "banana", "cherry", "date", "fig"];

// Extract head elements and collect the tail
const [firstItem, secondItem, ...remainingItems] = items;

console.log(firstItem); // "apple"
console.log(secondItem); // "banana"
console.log(remainingItems); // ["cherry", "date", "fig"]
//-------------------------------------------------------------------------------------------------------------------------
//Combining skipping with Rest elements
const numbers = [10, 20, 30, 40, 50];

// Skip index 0 and 1, capture index 2 onward
const [, , ...tail] = numbers;

console.log(tail); // [30, 40, 50]//-------------------------------------------------------------------------------------------------------------------------
//Spread Operator
//merging arrays
const fruits = ["apple", "banana"];
const vegetables = ["carrot", "spinach"];

// Merging multiple arrays cleanly
const food = [...fruits, ...vegetables, "tofu"];
console.log(food); // ["apple", "banana", "carrot", "spinach", "tofu"]
//-------------------------------------------------------------------------------------------------------------------------
// Shallow copying arrays
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);
console.log(original); // [1, 2, 3] (Original remains unchanged)
console.log(copy); // [1, 2, 3, 4]
//-------------------------------------------------------------------------------------------------------------------------
// Shallow Copying & Overriding objects
let user1 = {
  id: 101,
  name: "Alice",
  role: "guest",
  active: false,
};
const user = {
  id: 101,
  name: "Alice",
  role: "guest",
  active: false,
};

// Copy user object, update 'active', and add 'lastLogin'
const updatedUser = {
  ...user,
  active: true, // Overwrites user.active
  lastLogin: "2026-08-18", // Adds new property
};

const wrong = {active: true, ...user};
console.log("Wrong,", wrong)


console.log(updatedUser);
// { id: 101, name: "Alice", role: "guest", active: true, lastLogin: "2026-08-18" }
user1 = {
  ...user1,
  date: "1-2-3",
};
console.log(user1);
//-------------------------------------------------------------------------------------------------------------------------
// Merging objects
const defaults = { theme: "light", showSidebar: true };
const userPrefs = { theme: "dark" };

// Merging object properties (userPrefs overrides defaults)
const settings = { ...defaults, ...userPrefs };
console.log(settings); // { theme: "dark", showSidebar: true }
//-------------------------------------------------------------------------------------------------------------------------
// Spreading Aruguments into function calls

const numbers1 = [5, 12, 8, 130, 44];

// Legacy approach: Math.max.apply(null, numbers1);

// Spread approach:
const maxVal = Math.max(...numbers1);
console.log(maxVal); // 130
//-------------------------------------------------------------------------------------------------------------------------
//  Converting iterables to array.

// Converting Set -> Array (Common Unique Values Pattern)
const uniqueNumbers = [...new Set([1, 2, 2, 3, 4, 4])];
console.log(uniqueNumbers); // [1, 2, 3, 4]

// Converting Map entries/keys/values -> Array
const userMap = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log([...userMap.keys()]); // ["a", "b"]
console.log([...userMap.values()]); // [1, 2]
//-------------------------------------------------------------------------------------------------------------------------
//Shallow Copy Trap  & Memory Mechanics

const originalUser = {
  name: "Alice",
  settings: { theme: "dark" }, // Nested object reference
};

const shallowCopy = { ...originalUser };

// Mutating nested object on the copy affects the originalUser!
shallowCopy.settings.theme = "light";

console.log(originalUser.settings.theme); // "light" (Shared memory reference!)
//-------------------------------------------------------------------------------------------------------------------------
//Deep copy alternatives
const deepCopy = structuredClone(originalUser);
deepCopy.settings.theme = "dark"

console.log(originalUser.settings.theme)
console.log(deepCopy.settings.theme)

//-------------------------------------------------------------------------------------------------------------------------
