// function getUser(callback) {
//     setTimeout(()=> {
//         callback()
//     },2000)

// }

// function foo(user={NAME:"ARAVIND"}) {

//     console.log(user);
// }
// getUser(foo);


// function getUser (callback) {
//     setTimeout( function (){
//         callback({
//             id:1,
//             name: "Vishnu"
//         })
//     },1000)
// }

// function displayUser(user) {
//     console.log(user);
// }

// getUser2(displayUser);



// function userReceived(user) {
//     console.log(user);
//     getPosts(user.id,postRecieved);
// }

// function getPosts(userId,callback) {
//     setTimeout(()=> {
//         callback([
//             { id: 101, title: "JavaScript" },
//             { id: 102, title: "Node.js" }
//         ])
//     },1000)
// }

// function displayComments(comments) {
//     console.log(comments);
// }
// function postRecieved(posts) {
//     getComments (posts[0].id,displayComments)
// }

// function getComments(postId,callback) {
//     setTimeout(() => {
//         callback([
//             "Great Post!",
//             "Very helpful"
//         ])
//     })
// }

// getUser(userReceived);
// getUser(getPosts);

// getUser(user=>{
//     getPosts((user.id,displayPost) => {
//         displayPost( post => {
//             console.log(post);
//         })
//     })
// })

// function userRecieved (user) {
//     const userId = user.id
//     console.log(user)
//     getPost(userId,postsRecieved)
// }

// function postsRecieved(posts) {
//     const postId = posts[0].id
//     getComments(postId,commentsRecieved);
// }

// function commentsRecieved(comments) {
//     console.log(comments);
// }

// function getPost(userId,callback) {
//     setTimeout(()=> {
//         callback([
//             {id: 1,title: "Node.js"},
//             {id: 2, title: "Javascript"}
//         ])
//     },1000)
// }

// function getComments(postId,callback) {
//     setTimeout(()=> {
//         callback([
//             "Great Post",
//             "Very helpfull"
//         ])
//     },1000)
// }
// function getUser (callback) {
//     const user = {
//             name:"Vishnu",
//             id: 1
//         }
//     setTimeout(()=> {
//         callback(user)
//     })
// }
// getUser(userRecieved);
// userRecieved({id:1})

//how to decide which function is the one takes callback and the one does not. 
//lets wirte a function where instead or hard coding data we recieve data fromr somwhre 


// so for every function invocation there is the defenition of the function and there is also the defenition of the callback. and also the operation of exrracting the necesaray argument that need to passon the the next function invocation

//step 1
// getUser(userRecieved);

// function getUser(callback) {
//     const user = {
//         id: 1,
//         name: "Vishnu"
//     }
//     setTimeout(() => {
//         callback(user);
//     }, 1000);
// }

// function userRecieved(user) {
//     const userId = user.id;

//     getPosts(userId,postsReceived)
// }

// function getPosts(userId, callback) {
//     const posts = [{
//         id: 1, title: "Node.js",},{
//         id: 2, title: "JavaScript"
//     }]
//     setTimeout(()=> {
//         callback(posts);
//     },1000)
// }

// function postsReceived(posts) {
//     const postId = posts[0].id;
//     getComments(postId,commentsReceived);
// }

// function getComments(postId,callback) {
//     const comments = [
//         "Great Posts",
//         "Very helpful"
//     ]
//     setTimeout(()=> {
//         callback(comments);
//     },1000)
// }

// function commentsReceived(comments) {
//     console.log(comments);
// }
// getUser(userRecieved);

//step 2 - converting to anonymous functions or arrow functions

// getUser(function (user) {
//     getPosts(user.id,(posts) => {
//         getComments(posts[0].id,(comments)=> {
//             console.log(comments);
//         })
//     })
// })

// function getUser(callback) {
//     const user = {
//         id: 1,
//         name: "Vishnu"
//     }
//     setTimeout(() => {
//         callback(user);
//     }, 1000);
// }

// function userRecieved(user) {
//     const userId = user.id;

//     getPosts(userId,postsReceived)
// }

// function getPosts(userId, callback) {
//     const posts = [{
//         id: 1, title: "Node.js",},{
//         id: 2, title: "JavaScript"
//     }]
//     setTimeout(()=> {
//         callback(posts);
//     },1000)
// }

// // function postsReceived(posts) {
// //     const postId = posts[0].id;
// //     getComments(postId,commentsReceived);
// // }

// function getComments(postId,callback) {
//     const comments = [
//         "Great Posts",
//         "Very helpful"
//     ]
//     setTimeout(()=> {
//         callback(comments);
//     },1000)
// }

// function commentsReceived(comments) {
//     console.log(comments);
// }

// const users = [
//     {
//         id: 1,
//         name: "Vishnu"
//     },
//     {
//         id: 2,
//         name: "Alice"
//     },
//     {
//         id: 3,
//         name: "Bob"
//     }
// ];

// const posts = [
//     {
//         id: 101,
//         userId: 1,
//         categoryId: 1, //------------------------------------level 6 changes------------------------------------
//         title: "Learning JavaScript"
//     },
//     {
//         id: 102,
//         userId: 1,
//         categoryId: 2, //------------------------------------level 6 changes------------------------------------
//         title: "Learning Node.js"
//     },
//     {
//         id: 103,
//         userId: 2,
//         title: "React Basics"
//     }
// ];

// const comments = [
//     {
//         id: 1001,
//         postId: 101,
//         text: "Great post!"
//     },
//     {
//         id: 1002,
//         postId: 101,
//         text: "Very helpful."
//     },
//     {
//         id: 1003,
//         postId: 102,
//         text: "Nice explanation."
//     }
// ];

//-----------------------------------------------Level 1 (Warm-up)-----------------------------------------------
// Objective

// Given a user id,

// find the user.

// You'll write

// getUserById(id, callback)

// Expected usage

// getUserById(1, userReceived);

// Output

// {
//     id: 1,
//     name: "Vishnu"
// }


// // asynchronous operation
// function getUser(id,callback) {
    //     setTimeout(()=> {
        //     const user = users.find(user=> user.id===id)
//             callback(user);
//     },1000);
// }

// //callback
// function userReceived(user) {
//     console.log(user);
//     //level 2 trigger
//     getPosts(user.id,postsReceived);
// }
// getUser(1,userReceived)
//----------------------------------------------------Level 2----------------------------------------------------
// Objective

// Given a user,

// retrieve all of that user's posts.

// You should end up with

// getUserById
//         ↓
// userReceived
//         ↓
// getPostsByUserId
//         ↓
// postsReceived

// // asynchronous operation
// function getPosts(userId,callback) {
    //     setTimeout(() => {
        //     const usersPosts = posts.filter(post=> post.userId==userId)
//         callback(usersPosts);
//     }, 1000);
// }

// //callback
// function postsReceived(posts) {
//     console.log(posts);
//     //----------------------------------------------Level 3 trigger----------------------------------------------
//     getComments(posts[0].id,commentReceived)
// }



//----------------------------------------------------Level 3----------------------------------------------------
// Objective

// Now retrieve comments for the first post.

// Workflow

// getUserById
//         ↓
// userReceived
//         ↓
// getPostsByUserId
//         ↓
// postsReceived
//         ↓
// getCommentsByPostId
//         ↓
// commentsReceived

// This is basically what you've already practiced.

// // asynchronous operation
// function getComments(postId,callback) {
    //     setTimeout(() => {
        //     const postsComments = comments.filter(comment=>comment.postId===postId);
//         callback(postsComments);
//     }, 1000);
// }

// //callback
// function commentReceived(comments) {
//     console.log(comments);
// }



// ----------------------------------------------------Level 4---------------------------------------------------
// Objective

// Print

// User Name

// Post Title

// Comments

// Example output

// Vishnu

//Learning JavaScript

// Great post!

// Very helpful.

// Now you'll have to keep track of information.


//asynchronous operation
// function getUser(id,callback) {
//     setTimeout(()=> {
//         const user = users.find(user=> user.id===id)
//             callback(user);
//     },1000);
// }

// //callback
// function userReceived(user) {
//     console.log(user);
//     //----------------------------------------------level 2 trigger----------------------------------------------
//     getPosts(user.id,postsReceived);
// }
// getUser(1,userReceived)

//asynchronous operation
// function getPosts(userId,callback) {
//     setTimeout(() => {
//         const post = posts.filter(post=> post.userId==userId)
//         callback(post);
//     }, 1000);
// }

// //callback
// function postsReceived(posts) {
//     console.log(posts);
//     //----------------------------------------------Level 3 trigger----------------------------------------------
//     getComments(posts[0].id,commentReceived)
// }


//asynchronous operation
// function getComments(postId,callback) {
//     setTimeout(() => {
//         const postComment = comments.filter(comment=>comment.postId===postId);
//         callback(postComment);
//     }, 1000);
// }

// //callback
// function commentReceived(comments) {
//     console.log(comments);
// }


//callbackHell

// getUser(1,user=> {
//     // console.log(user)
//     getPosts(user.id,(posts=> {
//         // console.log(posts)
//         getComments(posts[0].id,(comments=> {
//             console.log(user);
//             console.log(posts)
//             console.log(comments)
//             //------------------------------------------level 5 trigger------------------------------------------
//             getLikesById(posts[0].id,(count)=>{
//                 console.log(count);
//             })
//         }))
//     }))
// })



//---------------------------------------------Level 5 (New Concept)---------------------------------------------
// Add another dataset.

// const likes = [
//     {
//         postId: 101,
//         count: 12
//     },
//     {
//         postId: 102,
//         count: 7
//     },
//     {
//         postId: 103,
//         count: 20
//     }
// ];

// Create

// getLikesByPostId()

// Workflow

// User
//     ↓
// Posts
//     ↓
//Likes

//asynchronous operation
// function getLikesById(postId,callback) {
//     setTimeout(() => {
//         const likesDocument = likes.find(like=> like.postId===postId);
//         callback(likesDocument.count)
//     }, 1000);
// }


//----------------------------------------------------Level 6----------------------------------------------------

// Add categories.

// const categories = [
//     {
//         id: 1,
//         name: "JavaScript"
//     },
//     {
//         id: 2,
//         name: "Node.js"
//     }
// ];

// Posts now become

// {
//     id: 101,
//     userId: 1,
//     categoryId: 2,
//     title: "Learning Node.js"
// }

// Objective

// Print

// User Name

// Post Title

// Category Name

// function getCategory(categoryId, callback) {
//     setTimeout(()=> {
//         const category = categories.find(category=>category.id===categoryId);
//         callback(category.name)
//     })
// }
// getUser(1,(user=> {
//     getPosts(user.id,(posts=> {
//         getCategory(posts[0].categoryId,(categoryName) => {
//             console.log("User Name:", user.name);
//             console.log("Post Title", posts[0].title)
//             console.log("catetory Name:",categoryName);
//         })
//     }))
// }))
//----------------------------------------------------Level 7----------------------------------------------------

// Now combine everything.

// Print

// User

// ↓

// Post

// ↓

// Category

// ↓

// Comments

// ↓

//Likes
// getUser(1,(user=> {
//     getPosts(user.id,(posts=> {
//         getCategory(posts[0].categoryId,(categoryName=> {
//             getComments(posts[0].id,(comments=> {
//                 getLikesById(posts[0].id,(count=> {
//                     console.log(user.name);
//                     console.log(posts[0]);
//                     console.log(categoryName);
//                     console.log(comments);
//                     console.log(count);
//                 }))
//             }))
//         }))
//     }))
// }))
//-------------------------------------------Level sidequest -------------------------------------------
// Given a user id

// ↓

// Find the user

// ↓

// Find ALL posts

// ↓

// For EACH post

//     ↓

//     Find category

//     Find likes

//     Find comments

// ↓

// Print

// Post title
// Category
// Likes
// Comments

// Now you'll have to think:

// Do I use a loop?
// Where does the loop go?
// Which callback belongs inside the loop?
// What happens when there are two posts instead of one?

// That's much closer to real-world asynchronous programming.

// getUser(1,(user=> {
//     getPosts(user.id,(posts=> {
        
//         posts.forEach((post) => {
//             console.log(post.title)            
//             getCategory(post.categoryId,(categoryName=> {
//                 getComments(post.id,(comments=> {
//                     getLikesById(post.id,(likesCount=> {
//                         console.log(categoryName);

//                         comments.forEach(comment=>{
//                              console.log(comment.text)
//                             });
//                         console.log(likesCount);
//                     }))
//                 }))
//             }))
//         });
//     }))
// }))



//-------------------------------------------Level 8 (Decision Making)-------------------------------------------
// This one is much closer to real applications.

// Dataset

// const orders = [
//     {
//         id: 1,
//         customerId: 2,
//         total: 500
//     }
// ];

// const customers = [
//     {
//         id: 2,
//         name: "Alice"
//     }
// ];

// Objective

// Given an order id

// ↓

// Find the order

// ↓

// Find the customer

// ↓

// Print

// Order Total

// Customer Name
// function  getOrder(orderId,callback) {
//     setTimeout(() => {
//         const order = orders.find(order=> order.id===orderId)
//         callback(order)
//     }, 1000);
// }
// function getCustommer(customerId, callback) {
//     setTimeout(() => {
//         const customer = customers.find(customer=> customer.id=== customerId)
//         callback(customer)
//     }, 1000);
// }
// getOrder(1,(order)=> {
//     getCustommer(order.customerId,(customer)=> {
//         console.log(order.total);
//         console.log(customer.name)
//     })
// })
//----------------------------------------------------Level 9----------------------------------------------------

// Movie database.

// Movies

// ↓

// Director

// ↓

// Studio
//----------------------------------------------------Level 10---------------------------------------------------

// University database.

// Student

// ↓

// Department

// ↓

// Professor
//---------------------------------------------------Level 11---------------------------------------------------
const customers = [
    {
        id: 1,
        name: "Vishnu"
    },
    {
        id: 2,
        name: "Alice"
    },
    {
        id: 3,
        name: "Bob"
    }
];

const orders = [
    {
        id: 101,
        customerId: 1,
        orderDate: "2025-06-01"
    },
    {
        id: 102,
        customerId: 1,
        orderDate: "2025-06-15"
    },
    {
        id: 103,
        customerId: 2,
        orderDate: "2025-06-20"
    }
];

const orderItems = [
    {
        orderId: 101,
        productId: 1,
        quantity: 2
    },
    {
        orderId: 101,
        productId: 3,
        quantity: 1
    },
    {
        orderId: 102,
        productId: 2,
        quantity: 4
    },
    {
        orderId: 103,
        productId: 4,
        quantity: 2
    }
];

const products = [
    {
        id: 1,
        name: "Mechanical Keyboard",
        supplierId: 1,
        price: 3500
    },
    {
        id: 2,
        name: "Gaming Mouse",
        supplierId: 2,
        price: 1800
    },
    {
        id: 3,
        name: "27-inch Monitor",
        supplierId: 3,
        price: 15000
    },
    {
        id: 4,
        name: "USB-C Hub",
        supplierId: 2,
        price: 2500
    }
];

const suppliers = [
    {
        id: 1,
        name: "KeyTech"
    },
    {
        id: 2,
        name: "TechWorld"
    },
    {
        id: 3,
        name: "DisplayHub"
    }
];
// Given a customer ID

// ↓

// Find the customer

// ↓

// Find all orders

// ↓

// For each order

//     Find every product

// ↓

// For each product

//     Find the supplier

// ↓

// Print

// Customer Name

// Order ID

// Product Name

// Supplier Name

function getCustomer(customerId,callback) {
    setTimeout(() => {
        const customer = customers.find(customer=>customer.id === customerId);
        callback(customer);
    }, 1000);
}

function getOrders(customerId, callback){
    setTimeout(() => {
        const allOrders = orders.filter(order=>order.customerId===customerId)
        callback(allOrders);
    }, 1000);
}

function getOrderItems(orderId,callback) {
    setTimeout(() => {
        const items = orderItems.filter(orderItems=>orderItems.orderId===orderId)
        callback(items);
    }, 1000);
}

function getProduct(productId,callback) {
    setTimeout(() => {
        const product = products.find(product=> product.id===productId);

        callback(product);
    }, 1000);
}
function getSupplier(supplierId, callback) {
    setTimeout(() => {
        const supplier = suppliers.find(supplier=> supplier.id=== supplierId);
        callback(supplier);
    }, 1000);
}



// Print

// Customer Name

// Order ID

// Product Name

// Supplier Name

getCustomer(1,(customer)=> {
    console.log(customer.name)

    getOrders(customer.id,(orders=> {
        orders.forEach(order => {
            console.log(order.id)
            getOrderItems(order.id,(orderItems)=>{
                orderItems.forEach(orderItem => {
                    getProduct(orderItem.productId,(product)=> {
                        getSupplier(product.supplierId,(supplier)=> {
                            // console.log(orderItems)
                            console.log(product.name)
                            console.log(supplier.name)
                        })
                    })
                });
            })
        });
    }))
})

// # JavaScript Asynchronous Programming Tutor

// You are my dedicated JavaScript asynchronous programming tutor.

// Your goal is to teach me **callbacks, callback hell, Promises, async/await, and asynchronous design** from first principles.

// Do **not** skip steps or jump directly to modern syntax. I want to understand *why* each technique exists before learning the next one.

// ---

// # Teaching Style

// I learn best by understanding the execution flow first.

// Whenever possible:

// * Explain the execution order.
// * Explain which function is executing.
// * Explain which callback is being invoked.
// * Explain where variables are in scope.
// * Explain why a function was created.
// * Explain why a callback was created.
// * Explain the responsibility of every function.

// Do **not** immediately use arrow functions if a regular function makes the flow easier to understand.

// Prefer this progression:

// 1. Named functions
// 2. Anonymous functions
// 3. Arrow functions

// Only move to the next stage after I'm comfortable with the previous one.

// ---

// # Current Progress

// I already understand:

// * Synchronous execution
// * What callbacks are
// * Difference between synchronous callbacks and asynchronous callbacks
// * `setTimeout()` as a simulation of asynchronous work
// * Callback hell / Pyramid of Doom
// * Closures in callback hell
// * How callbacks receive data
// * Designing asynchronous functions and callback functions
// * Separating:

//   * asynchronous operations
//   * callback handlers
// * Sequential asynchronous workflows
// * Branching asynchronous workflows
// * Independent vs dependent asynchronous operations
// * Concurrent asynchronous operations
// * Fan-out pattern

// Do not reteach these unless necessary.

// ---

// # My Preferred Learning Style

// I like to design the solution myself.

// Do **not** immediately give me the answer.

// Instead:

// 1. Give me an objective.
// 2. Give me fake data.
// 3. Let me design:

//    * asynchronous functions
//    * callback functions
//    * data flow
// 4. Review my solution like a senior developer.

// Point out:

// * good design
// * poor naming
// * unnecessary coupling
// * scope issues
// * responsibility issues
// * better alternatives

// Do not simply say "correct."

// ---

// # Design Principles I Want To Follow

// Whenever possible:

// Asynchronous functions should only retrieve data.

// Example:

// ```javascript
// getUser()
// getPosts()
// getComments()
// ```

// Callbacks should decide what to do with that data.

// Example:

// ```javascript
// userReceived()
// postsReceived()
// commentsReceived()
// ```

// Generic retrieval functions should return complete objects/documents.

// Example:

// ```javascript
// callback(user);
// ```

// instead of

// ```javascript
// callback(user.id);
// ```

// unless the function is intentionally specialized.

// ---

// # Function Organization

// For learning purposes, organize code in execution order.

// Example:

// ```text
// getUser()

// ↓

// userReceived()

// ↓

// getPosts()

// ↓

// postsReceived()

// ↓

// getComments()

// ↓

// commentsReceived()
// ```

// This helps me follow execution much better than grouping similar functions together.

// ---

// # Current Fake Database

// ```javascript
// const customers = [
//     {
//         id: 1,
//         name: "Vishnu"
//     },
//     {
//         id: 2,
//         name: "Alice"
//     },
//     {
//         id: 3,
//         name: "Bob"
//     }
// ];

// const orders = [
//     {
//         id: 101,
//         customerId: 1,
//         orderDate: "2025-06-01"
//     },
//     {
//         id: 102,
//         customerId: 1,
//         orderDate: "2025-06-15"
//     },
//     {
//         id: 103,
//         customerId: 2,
//         orderDate: "2025-06-20"
//     }
// ];

// const orderItems = [
//     {
//         orderId: 101,
//         productId: 1,
//         quantity: 2
//     },
//     {
//         orderId: 101,
//         productId: 3,
//         quantity: 1
//     },
//     {
//         orderId: 102,
//         productId: 2,
//         quantity: 4
//     },
//     {
//         orderId: 103,
//         productId: 4,
//         quantity: 2
//     }
// ];

// const products = [
//     {
//         id: 1,
//         name: "Mechanical Keyboard",
//         supplierId: 1,
//         price: 3500
//     },
//     {
//         id: 2,
//         name: "Gaming Mouse",
//         supplierId: 2,
//         price: 1800
//     },
//     {
//         id: 3,
//         name: "27-inch Monitor",
//         supplierId: 3,
//         price: 15000
//     },
//     {
//         id: 4,
//         name: "USB-C Hub",
//         supplierId: 2,
//         price: 2500
//     }
// ];

// const suppliers = [
//     {
//         id: 1,
//         name: "KeyTech"
//     },
//     {
//         id: 2,
//         name: "TechWorld"
//     },
//     {
//         id: 3,
//         name: "DisplayHub"
//     }
// ];
// ```

// ---

// # Important Things I've Learned

// For every asynchronous step there are generally two functions:

// 1.

// ```javascript
// getUser(...)
// ```

// Starts asynchronous work.

// 2.

// ```javascript
// userReceived(...)
// ```

// Handles the result.

// The callback usually:

// * receives data
// * optionally processes it
// * extracts the information needed for the next asynchronous operation
// * starts the next asynchronous operation

// ---

// # Current Goal

// I want to replace the fake asynchronous operations that currently use:

// ```javascript
// setTimeout(...)
// ```

// with **real HTTP requests**.

// I want to build a tiny Node.js + Express server.

// The server will:

// * keep the fake database in memory
// * expose REST endpoints
// * return JSON

// The client will:

// * use `fetch()`
// * still use callbacks initially
// * later be converted to Promises
// * then converted to async/await

// ---

// # Planned Server Routes

// ```
// GET /customers/:id

// GET /customers/:id/orders

// GET /orders/:id/items

// GET /products/:id

// GET /suppliers/:id
// ```

// Initially everything should use hardcoded arrays.

// No MongoDB.

// No authentication.

// No database.

// No Express middleware beyond what is necessary.

// ---

// # Learning Roadmap

// Continue teaching me in this order:

// 1. Callback practice
// 2. Anonymous callbacks
// 3. Arrow function callbacks
// 4. Callback hell
// 5. Real Express server
// 6. Client using fetch() with callbacks
// 7. Promises
// 8. Promise chaining
// 9. Promise.all()
// 10. async/await
// 11. Error handling
// 12. Real-world patterns

// Do not skip any stage.

// ---

// # Code Reviews

// Whenever I submit code:

// * Review it like a senior developer.
// * Explain not only what is wrong, but why.
// * Point out design improvements.
// * Distinguish between:

//   * syntax
//   * logic
//   * asynchronous flow
//   * software design
// * Ask thought-provoking questions instead of immediately giving solutions whenever possible.

// js_crash_course/
// │
// └── asynchronous/
//     │
//     ├── callback.js                 ← Completed callback exercises
//     ├── callback-hell.js            ← Future/previous exercises
//     ├── promise.js                  ← Later
//     ├── async-await.js              ← Later
//     │
//     ├── client/
//     │   ├── callback-client.js      ← HTTP + callbacks
//     │   ├── promise-client.js       ← HTTP + Promises
//     │   └── async-client.js         ← HTTP + async/await
//     │
//     ├── server/
//     │   ├── package.json
//     │   ├── app.js
//     │   ├── database.js
//     │   └── routes/
//     │       ├── customers.js
//     │       ├── orders.js
//     │       ├── products.js
//     │       └── suppliers.js
//     │
//     └── README.md                   ← Optional notes