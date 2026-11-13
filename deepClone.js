// 1. The Core Problem: Shallow vs. Deep Copy
    // Shallow Copy (e.g., const clone = { ...obj }): Copies only the top-level properties. Any nested objects or arrays still share the exact same memory reference. Changing nested data in the clone accidentally modifies the original object.

    // Deep Copy: Creates an entirely independent clone in memory, completely severing all shared references. Changing the clone has no effect on the original.

// 2. Standard Deep Copy Methods

    // StructuredClone(obj)
        //Pro
            // The modern native standard. Safely copies Date objects, Map, Set, and handles circular references.
        //Cons
            // Throws a DataCloneError and crashes if the object contains functions or DOM nodes.
    // JSON.parse(JSON.stringify(obj))
        // Pros
            // Built-in and quick for simple data types.
        // Cons
            // Destroys Date objects, completely strips out functions, and ignores undefined values.

    // Lodash _.cloneDeep(obj)
        // Pros
            // Bulletproof industry standard. Handles virtually every JavaScript edge case flawlessly.
        //  Cons
            // Requires installing and importing a 3rd-party library into your project.

// 3. Writing a Custom Deep Copy (Under the Hood)
    // Building a deep copy function from scratch is a standard interview test because it reveals how well you understand JavaScript's memory and data types.

        // Recursion: The core mechanic. When your loop encounters a nested object or array, the function must call itself to drill down and copy that nested level.

        // The Array Trap: In JavaScript, typeof [] evaluates to "object". You must explicitly check Array.isArray(obj) to initialize the new copy as an array ([]) instead of an object ({}).

        // The Infamous null Bug: JavaScript has a historical bug where typeof null === "object". Without an explicit if (obj === null) check at the top of your function, your recursive loop will mistakenly transform null values into empty objects ({}).

        // Functions: Functions evaluate to "function", not "object". A standard recursive loop will safely bypass the object logic and copy the function by reference. (Native structuredClone strictly forbids this).

const originalPlayer = {
    name : "Mario",
    status: {
        level: 1,
        lives: 3
    }
};

// Players 2 joins! Let's copy Mario's starting stats.
const player2 = {...originalPlayer};
player2.name = "Luigi";
player2.status.lives = 99;

console.log(originalPlayer);
console.log(player2)


// 1. The Classic Hack: JSON.parse(JSON.stringify(obj))

//      - Pros: Built-in, works fine for simple data like strings and numbers.

//      - Cons: It completely destroys Date objects, ignores undefined, and strips out functions.

// 2. The 3rd-Party Library (like Lodash's cloneDeep):

//      - Pros: Bulletproof. It handles almost every weird edge case perfectly.

//      - Cons: You have to install and load an extra library into your project.

// 3. The Modern Native Way: structuredClone(obj)

//      - Pros: Built directly into modern JavaScript! It safely copies Date, Map, Set, and even handles circular references (where an object references itself).

//      - Cons: It cannot copy functions or DOM nodes (it will throw an error if you try).




const robot = {
  model: "T-800",
  weapons:[["laser", {name:"plasma rifle",ammo:40}]],
  target: "John Connor",
  terminate: function() {
    console.log("Hasta la vista, baby.",this.model);
  },
    status: {
        level: 1,
        lives: 3
    },
    last: null
};

// const robotClone = structuredClone(robot);
// console.log("robot clone:", robotClone);

// manual deep copy function 

// function deepCopy(obj){
//     let result
//     if(Array.isArray(obj)) {
//         result = [];
//     } if(typeof obj === 'object') {
//         result = {};
//     }
//     for(let key in obj) {
//         if(typeof obj[key] === "object") {
//             if(Array.isArray(obj[key])) {
//                 let arr = [];
//                 for(let elem in obj[key]) {
//                     if(typeof elem === 'object'){
//                         arr.push(deepCopy(elem))
//                     } else {
//                         arr.push(elem);
//                     }
//                 }
//                 result[key] = arr;
//             }else {
//                 result[key]=  deepCopy(obj[key])
//             }
//         } else {

//             result[key] = obj[key];
//         }
//     }
//     return result;
// }

function deepCopy(obj) {
    if(obj === null) return null;
    let result;
    if(Array.isArray(obj)) {
        result = [];
    }
    else if(typeof obj === 'object') {
        result = {};
    }
    for(let key in obj) {
        if(typeof obj[key]=== 'object')  {
            result[key] = deepCopy(obj[key])
        } else {
            result[key] = obj[key]
        }
    }
    return result;
}

// console.log(deepCopy(robot));
const cloneRobot = deepCopy(robot);
cloneRobot.model = "John Connor"
// cloneRobot.weapons[1].ammo = 0;
cloneRobot.status.level = 99
console.log(JSON.stringify(robot, null,2));
console.log(JSON.stringify(cloneRobot, null,2));
// console.log(cloneRobot)
cloneRobot.terminate();

// 4. Real-World Applications
    // Frontend Frameworks (React, Vue): Frameworks often rely on "immutability" to detect changes. You must deeply clone state, modify the clone, and pass it back to trigger UI re-renders. Direct mutation causes the UI to freeze with stale data.
    // Undo/Redo History: Saving data snapshots (like a user filling out a multi-step form or using a drawing app) requires deep copies. Shallow copies will result in current edits overwriting the saved history snapshots.
    // Default Configurations: When applying default settings to a new user or game instance, deep copying ensures the user's modifications don't permanently mutate the master template for everyone else.