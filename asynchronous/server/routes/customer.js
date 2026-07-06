const express = require('express');
const { customers, orders } = require('../database');
const router = express.Router();


router.get('/:id',(req,res)=> {
    // let customerId = req.params.id;
    const customerId = Number(req.params.id);
    const customer = customers.find(customer=>customer.id=== customerId)
    console.log(customer);
    if(!customer) {

    }
    res.json(customer)
})

router.get('/:id/orders',(req,res)=> {
    const customerId = Number(req.params.id);
    const customerOrders = orders.filter(order=> order.customerId===customerId);

    res.json(customerOrders)
})

module.exports = router;