// 'use strict'
// Strict Mode Quirk: If you try to change a frozen object in normal JavaScript, it fails silently (your code just ignores the change). If you have "use strict"; enabled, it will throw a TypeError and crash your program.



// 1. Object.freeze(obj)

    // The Rule: "Total lockdown."

    // What it allows: Nothing. You can only read the data.

    // What it blocks: You cannot add, delete, or change any properties.

const user = {
    name: "Neo",
    role: "Hacker"
};

Object.freeze(user);

user.role = "The One";
user.age = 33;
delete user.name;

console.log(user); // if not used 'use strict' silenty ignores all changes.


// 2. Object.seal(obj)

    // The Rule: "No adding, no deleting" (Think of a sealed Ziploc bag).

    // What it allows: You can still change the values of things that are already inside the object.

    // What it blocks: You cannot add new properties, and you cannot delete existing properties.
const user2 = {
    name: "Trinity",
    role: "Hacker"
}

Object.seal(user2);

user2.role= "Captain";
user2.ship = "Nebuchadnezzar";
delete user2.name;

console.log('user2', user2) // it would allow to change properties but not add or delete properties


// 3. Object.preventExtensions(obj)

    // The Rule: "No adding."

    // What it allows: You can change the values of existing properties, and you can delete existing properties.

    // What it blocks: You cannot add any new properties to the object.
const user = {
  name: "Morpheus",
  role: "Captain"
};

Object.preventExtensions(user);

// Let's try to mutate it
user.role = "Leader";      
delete user.role;           
user.ship = "Nebuchadnezzar";              

console.log(user);


// The Shallow Trap
// All three of these built-in methods are strictly shallow. If you Object.freeze() an object, only the top-level properties are locked. Any nested objects or arrays inside of it are completely unprotected and can still be changed, deleted, or extended.

// Custom Deep Freeze Implementation
// To truly lock down a complex object, you must use recursion to traverse through every nested object and freeze them one by one.

function deepFreeze(obj) {
    if(obj === null) return null
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            deepFreeze(obj[key]);
        } 
    }
    return Object.freeze(obj)
}