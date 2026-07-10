class MyPromise {
    constructor(){
        this.state = "pending",
        this.values = undefined;
        this.callbacks = [];
    }
    then(callback) {
        const nextPromise = new MyPromise();
        this.callbacks.push({
            callback,
            nextPromise
        });
        return nextPromise;
    }
    resolve(value) {
        this.state = "fulfilled";
        this.values = value;

        this.callbacks.forEach(item => {
            const result =item.callback(value);
            if(result instanceof MyPromise){
                result.then(value=> {
                    item.nextPromise.resolve(value);
                })
            } else {
                item.nextPromise.resolve(result);
            }
            
        })
    }
}

// console.log(new MyPromise())

const p1 = new MyPromise();

const delayed = new MyPromise();

const p2=p1.then((value)=> {
    // console.log(value);
    // return value;
    console.log("callback1");
    return delayed;
})

// const p3= p2.then((value)=>{
//     // console.log("p2:" ,value);
//     return value *2;
// })
// p3.then(value => {
//     // console.log(value);
// })
// console.log("p2:",p2)

p2.then(value => {
    console.log("callback2",value);
});

// console.log("p1:",p1);
p1.resolve(10);
// console.log(p2);
delayed.resolve(50)
// p2.resolve(42);
// console.log("p1 after resolve:",p1)
// console.log("p2 after resolve:",p2)
// console.log("p3 after resolve:",p3)


// console.log(p1 instanceof MyPromise)
// console.log(42 instanceof MyPromise)