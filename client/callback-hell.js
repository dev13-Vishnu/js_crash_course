const BASE_URL= 'http://localhost:5000/'

function getCustomer(customerId,callback) {
     fetch (`${BASE_URL}customers/${customerId}`)
        .then(response=> {
                
        return response.json().then(body => ({
            response,
            body
        }));
        })
        .then(({response,body})=> {
            if (!response.ok) {
                throw new Error(body.message);
            }
            return body;
        })
        .then((customer) =>callback(null,customer))
        .catch(err => {
            // console.log('control reached here')
            callback(err, null)
        })
}
function getOrders(customerId, callback){
    fetch (`${BASE_URL}customers/${customerId}/orders`)
        .then(response=> {
        return response.json().then(body=> ({
            response,
            body
        }));
        })
        .then(({response,body})=> {
            if(!response.ok) {
                throw new Error(body.message);
            }
            return body;
        })
        .then((orders) => callback(null,orders))
        .catch(err => callback(err,null))
}
function getOrderItems(orderId,callback){
    fetch (`${BASE_URL}orders/${orderId}/items`)
        .then(response=> {
            // console.log(response);
            // console.log(response.json())
            return response.json().then(body => ({
                response,
                body
            }))
        })
        .then(({response,body})=> {
            if (!response.ok){
                throw new Error(body.message);
            }
            return body;
        })
        .then(items => callback(null,items))
        .catch(err => callback(err, null))
}
function getProduct(productId, callback){
    fetch (`${BASE_URL}products/${productId}`)
        .then(response=> {
            return response.json().then(body=> ({
                response,
                body
        }));
        })
        .then(({response,body})=> {
            if(!response.ok) {
                throw new Error(body.message);
            }
            return body;
        })
        .then((product)=> callback(null,product))
        .catch(err=> callback(err,null))
}

function getSupplier(supplierId,callback) {
    fetch (`${BASE_URL}suppliers/${supplierId}`)
        .then(response=> {
            return response.json().then(body=> ({
                response,
                body
        }));
        })
        .then(({response,body})=> {
            if(!response.ok) {
                throw new Error(body.message);
            }
            return body;
        })
        .then(supplier=> callback(null,supplier))
        .catch(err => callback(err, null))
}

getCustomer(1,(err,customer)=>{
    if (err) {
        // console.log("contrle reached 'getOrder' invokation")
        console.error(err);
        return;
    }
    console.log(customer);
    getOrders(customer.id,(err,orders)=> {
        if (err) {
            console.error(err);
            return;
        }
        console.log(orders);
        orders.forEach(order => {
            console.log(order.id);
            getOrderItems(order.id,(err,orderItems)=> {
                if (err) {
                    console.error(err);
                    return;
                }
            console.log(orderItems);
                orderItems.forEach(orderItem => {
                    getProduct(orderItem.productId,(err,product)=> {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        getSupplier(product.supplierId,(err,supplier)=> {
                            if (err) {
                                console.error(err);
                                return;
                            }
                                console.log(product.name)
                                console.log(supplier.name);
                        })
                    })        
                });
            })
        });
    })
})