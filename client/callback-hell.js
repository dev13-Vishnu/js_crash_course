const BASE_URL= 'http://localhost:5000/'

function getCustomer(customerId,callback) {
     fetch (`${BASE_URL}customers/${customerId}`)
     .then((response)=> response.json())
     .then((customer)=>callback(customer))
}
function getOrders(customerId, callback){
    fetch (`${BASE_URL}customers/${customerId}/orders`)
    .then((response)=> response.json())
    .then((orders)=> callback(orders));
}
function getOrderItems(orderId,callback){
    fetch (`${BASE_URL}orders/${orderId}/items`)
    .then(response=> {
        // console.log(response);
        // console.log(response.json())
        return response.json()
    })
    .then(items=> callback(items))
    .catch(err=> console.error(err))
}
function getProduct(productId, callback){
    fetch (`${BASE_URL}products/${productId}`)
    .then((response)=> response.json())
    .then((product)=> callback(product));
}

function getSupplier(supplierId,callback) {
    fetch (`${BASE_URL}suppliers/${supplierId}`)
    .then(response=> response.json())
    .then(supplier=> callback(supplier))
}

getCustomer(1,(customer)=>{
    console.log(customer);
    getOrders(customer.id,(orders)=> {
        console.log(orders);
        orders.forEach(order => {
            console.log(order.id);
            getOrderItems(order.id,(orderItems)=> {
            console.log(orderItems);
                orderItems.forEach(orderItem => {
                    getProduct(orderItem.productId,(product)=> {
                        getSupplier(product.supplierId,(supplier)=> {
                                console.log(product.name)
                                console.log(supplier.name);
                        })
                    })        
                });    
            
            })
        });
        
    })
})