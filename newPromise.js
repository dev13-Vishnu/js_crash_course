// const fs = require('fs');
// function readFile(fileName) {
//     return new Promise((resolve, reject)=> {
//         console.log("Started reading file...");
//         //simulating readig file
//         setTimeout(()=> {
//             const contents = "Hellow from notes.txt";
//             resolve(contents);
//         },3000)
//     })
// }

// const promise = readFile("notes.txt");

// promise.then((contents)=> {
//     console.log("promise started");
//     console.log(contents);
// })
// readFile('notes.txt').then(data=> {
//     console.log("readfile Started");
//     console.log(data);
// });
// function readFile(fileName){
//     return new Promise ((resolve,reject)=>{
        // fs.readFileSync(fileName,'utf-8',(err,data)=> {
        //     console.log('inside readfile')
        //     if(err) {
        //         reject(err);
        //         return;
        //     } else {
        //         resolve(data);
        //     }
        // });
//         const contents = fs.readFileSync(fileName,'utf-8')

//         resolve(contents);
//     });
// }

// console.log('inside file')
// const promise = readFile('./notes.txt')


// promise.then((data)=> console.log(data))
// .catch(err=> console.log(err));
// console.log("promise started")


// function delay(delay, string) {
//     return new Promise ((resolve, reject)=> {
//         setTimeout(()=> {
//             resolve(string)
//         },delay)
//     })
// }

// delay(3000,"hello").then((value)=> console.log("3 second passed", value))

// function downloadFile(success) {
//     return new Promise((resolve, reject) => {
//         if(success ) {
//             resolve("file.pdf");
//         } else {
//             reject(new Error("download failed"));
//         }
//     })
// }


// downloadFile(false).then((value)=> console.log(value))
// .catch(err=> console.log(err.message));

// Stage 3: "Wait... my callback needs more asynchronous work." This is the next big problem. Imagine: downloadFile() .then(file => { // Need another async operation... }); Inside .then(), you realize: "I need to download another file." Now what? This is where many beginners write nested Promises. Then we rediscover flattening. Again, you've already learned this with MyPromise, but now you'll see it in real-world code. 
// Stage 4: Utility Methods Once you're comfortable consuming Promises, we'll ask: "What if I have five Promises?" Now we naturally arrive at: Promise.all() Promise.allSettled() Promise.race() Promise.any() Each one solves a different coordination problem. 

// getCustomer(1)
//     .then(customer => getOrders(customer.id))
//     .then(orders => getProduct(orders[0].productId))
//     .then(product => {
//         return getSupplier(product.supplierId)
//             .catch(() => {
//                 return {
//                     name: "Unknown Supplier"
//                 };
//             });
//     })
//     .then(supplier => {
//         console.log(supplier.name);
//     })
//     .catch(err => {
//         console.log("Fatal error:", err.message);
//     });
// Stage 5: async/await Only then. And I think this is where you'll have an "aha!" moment. Instead of teaching async/await as something new, I'll say: "Remember all those .then() chains you've been writing? async/await is another way to express the same flow." One thing I want to change After today's conversations, I want to change how I teach you. Instead of saying: "Today we're learning .then()." I'll say: Problem: "I have a Promise that resolves with 10, but I need 25. How do I transform the value?" That naturally leads to: .then(value => value * 2)