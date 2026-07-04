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

const users = [
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

const posts = [
    {
        id: 101,
        userId: 1,
        categoryId: 1, //------------------------------------level 6 changes------------------------------------
        title: "Learning JavaScript"
    },
    {
        id: 102,
        userId: 1,
        categoryId: 2, //------------------------------------level 6 changes------------------------------------
        title: "Learning Node.js"
    },
    {
        id: 103,
        userId: 2,
        title: "React Basics"
    }
];

const comments = [
    {
        id: 1001,
        postId: 101,
        text: "Great post!"
    },
    {
        id: 1002,
        postId: 101,
        text: "Very helpful."
    },
    {
        id: 1003,
        postId: 102,
        text: "Nice explanation."
    }
];

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
function getUser(id,callback) {
    setTimeout(()=> {
        const user = users.find(user=> user.id===id)
            callback(user);
    },1000);
}

// //callback
// function userReceived(user) {
//     console.log(user);
//     //----------------------------------------------level 2 trigger----------------------------------------------
//     getPosts(user.id,postsReceived);
// }
// getUser(1,userReceived)

//asynchronous operation
function getPosts(userId,callback) {
    setTimeout(() => {
        const post = posts.filter(post=> post.userId==userId)
        callback(post);
    }, 1000);
}

// //callback
// function postsReceived(posts) {
//     console.log(posts);
//     //----------------------------------------------Level 3 trigger----------------------------------------------
//     getComments(posts[0].id,commentReceived)
// }


//asynchronous operation
function getComments(postId,callback) {
    setTimeout(() => {
        const postComment = comments.filter(comment=>comment.postId===postId);
        callback(postComment);
    }, 1000);
}

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

const likes = [
    {
        postId: 101,
        count: 12
    },
    {
        postId: 102,
        count: 7
    },
    {
        postId: 103,
        count: 20
    }
];

// Create

// getLikesByPostId()

// Workflow

// User
//     ↓
// Posts
//     ↓
//Likes

//asynchronous operation
function getLikesById(postId,callback) {
    setTimeout(() => {
        const likesDocument = likes.find(like=> like.postId===postId);
        callback(likesDocument.count)
    }, 1000);
}


//----------------------------------------------------Level 6----------------------------------------------------

// Add categories.

const categories = [
    {
        id: 1,
        name: "JavaScript"
    },
    {
        id: 2,
        name: "Node.js"
    }
];

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

function getCategory(categoryId, callback) {
    setTimeout(()=> {
        const category = categories.find(category=>category.id===categoryId);
        callback(category.name)
    })
}
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

getUser(1,(user=> {
    getPosts(user.id,(posts=> {
        
        posts.forEach((post) => {
            console.log(post.title)            
            getCategory(post.categoryId,(categoryName=> {
                getComments(post.id,(comments=> {
                    getLikesById(post.id,(likesCount=> {
                        console.log(categoryName);

                        comments.forEach(comment=>{
                             console.log(comment.text)
                            });
                        console.log(likesCount);
                    }))
                }))
            }))
        });
    }))
}))



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