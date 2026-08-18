//1. Minimal closure example

// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     }
// }

// const addFive = makeAdder(5);


// console.log(addFive(3));
// console.log(addFive(10));

// ------------------------------------------------------------------------------------------------------------------------
// 2. Common Patterns Built on Closures
// Pattern A: Data Privacy / Encapsulation (Module Pattern)

// function createAccount(initialBalance) {
//     let balance = initialBalance;

//     return {
//         deposit(amount) {
//             if(amount > 0) {
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withdraw(amount) {
//             if(amount > 0 && amount <= balance) {
//                 balance -= amount 
//                 return balance;
//             }
//         },
//         getBalance() {
//             return balance;
//         }
//     }
// }

// let account = createAccount(100);
// console.log(account.getBalance());

// console.log(account.deposit(50));

// console.log(account.getBalance());
// console.log(account.balance);
// ------------------------------------------------------------------------------------------------------------------------
// Pattern B: Function Currying and Memoization
// function memoize(fn) {
//     const cache = {};
//     return function (...arg) {
//         if(arg in cache) {
//             return cache[arg];
//         }
//         console.log('function ran')
//         const result = fn(...arg);
//         cache[arg]  = result;
//         return result;
//     }
// }

// let result = memoize((a,b)=> a+b);
// let result2 = memoize((a,b)=> a*b);
// console.log(result(1,2));
// console.log(result(1,2));
// console.log(result2(1,2))

// ------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------
