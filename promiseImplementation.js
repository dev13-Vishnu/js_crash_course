class MyPromise {
    constructor(){
        this.state = "pending",
        this.values = undefined;
        this.reason = undefined;
        this.callbacks = [];
    }
    then(onFullfilled, onRejected) {
        const nextPromise = new MyPromise();
        this.callbacks.push({
            onFullfilled,
            onRejected,
            nextPromise
        });
        return nextPromise;
    }
    resolve(value) {
        this.state = "fulfilled";
        this.values = value;

        this.callbacks.forEach(item => {
            try {
                if(item.onFullfilled) {
                    const result =item.onFullfilled(value);
                    if(result instanceof MyPromise){
                        result.then(value=> {
                            item.nextPromise.resolve(value);
                        })
                    } else {
                        item.nextPromise.resolve(result);
                    }
                } else {
                    item.nextPromise.resolve(value);
                }
            } catch (error) {
                item.nextPromise.reject(error);
            }
        })
    }
    reject (reason) {
        this.state= "rejected";
        this.reason = reason;
        this.value = undefined;
        
        this.callbacks.forEach(item => {
            try {
                if(item.onRejected) {
                    const result =item.onRejected(reason)
                    if(result instanceof MyPromise){
                        result.then(
                            value => {
                                item.nextPromise.resolve(value);
                            },
                            error => {
                                item.nextPromise.reject(error);
                            }
                        );
                    } else {
                        item.nextPromise.resolve(result);
                    }
                } else {
                    item.nextPromise.reject(reason);
                }
            } catch (error) {
                item.nextPromise.reject(error);
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