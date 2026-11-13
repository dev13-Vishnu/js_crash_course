// Promise combinators allow you to handle multiple asynchronous tasks concurrently, dictating how a group of promises resolves or rejects based on specific rules.

// Promise.all (The "All or Nothing" Rule)
    // Behavior: Waits for every promise in the array to resolve successfully.

    // Success: Returns an array containing all resolved values in the exact order they were requested.

    // Failure: Follows a "fail-fast" approach. If even one promise rejects, the entire operation fails instantly, jumping straight to the .catch block and discarding any successful data.

    // Best for: Situations where the application absolutely needs every piece of data to proceed.
const allFetchUsers = Promise.resolve(["Alice", "Bob"]);
// const allFetchPosts = Promise.reject("Network Error: Posts failed to load");
const allFetchComments = Promise.resolve(["Great Post!","Nice!"]);

Promise.all([allFetchUsers,  allFetchComments])
    .then((results)=> {
        console.log("all, Everything loaded:", results);
    })
    .catch(error=> {
        console.log("all, error:", error);
    })


// Promise.allSettled (The "Resilient" Rule)
    // Behavior: Waits for all promises to finish, regardless of whether they succeed or fail. It never short-circuits.

    // Success/Failure: It never triggers a .catch block. Instead, it always resolves and returns an array of objects detailing the outcome of each individual promise.

    // Data Structure: Each returned object has a status ("fulfilled" or "rejected"). Fulfilled promises include a value property, while rejected promises include a reason property.

    // Best for: Loading complex pages where you want to display the data that succeeded while gracefully hiding or showing error messages for the data that failed.
const allSettledFetchUsers = Promise.resolve(["Alice","Bob"]);
const allSetteledFetchPosts = Promise.reject("Network Eroor");

Promise.allSettled([allFetchUsers, allSetteledFetchPosts])
    .then((result) => {
        console.log("all settled result :",result);
        console.log("all settled result 0:",result[0]);
        console.log("all settled result 1:",result[1]);
    }).catch((err) => {
        console.log("all setteled, error:", err);
    });


// Promise.race (The "Speed Demon" Rule)
    // Behavior: Settles as soon as the fastest promise crosses the finish line, completely ignoring the rest.

    // Success/Failure: It adopts the exact state of the winner. If the fastest promise resolves, it triggers .then. If the fastest promise rejects, it instantly triggers .catch.

    // Best for: Forcing network timeouts. You can race a slow API fetch against a timer promise that rejects after 5 seconds to ensure the user isn't stuck waiting forever.
// const fastServer = new Promise(resolve=> setTimeout(()=> resolve("Data from fast server"),100));
const slowServer = new Promise((resolve)=> setTimeout(()=> resolve("Data from slow server"),500));
const timeOut = new Promise((_,reject)=> setTimeout(()=> reject("Request timed out!"), 200)); // reject argument should be the second one always

Promise.race([
    slowServer,
    // fastServer,
    timeOut,
])
    .then(result=> {
        console.log("race, Winner:", result);
    })
    .catch(error=>{
        console.log("race, Error:", error);
    })
        

// Promise.any (The "Optimist" Rule)
    // Behavior: Looks only for the first promise to successfully resolve, ignoring any fast rejections along the way.

    // Success: Returns the value of the first successful promise.

    // Failure: Only goes to the .catch block if every single promise in the array rejects. When this happens, it throws a special AggregateError.

    // Best for: Redundancy. If you have three different servers hosting the same image, you can request all three and instantly use whichever one delivers the image first.
const server1 = new Promise((_, reject)=> setTimeout(reject("Server 1 down"),100));
const server2 = new Promise((resolve)=> setTimeout(resolve("Server 2 data"),300));
const server3 = new Promise((_, reject)=> setTimeout(reject("Server 3 down"),500));

Promise.any([
    server1,
    server2,
    server3
])
.then(results=> console.log('any, results', results))
.catch(err=> console.log('any, error:', err))

// Critical Concept: The Promise Constructor
// When creating custom promises using new Promise(), JavaScript ignores what you name the parameters and relies strictly on their order. The first parameter is always the resolve function, and the second is always the reject function. Passing a single parameter named reject will actually assign the resolve function to it, causing your intentional errors to register as successes. Always use the standard (resolve, reject) signature to prevent this.