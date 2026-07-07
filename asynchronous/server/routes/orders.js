const express = require('express');
const { orderItems, orders } = require('../database');

const router = express.Router();

router.get('/:id/items',(req,res) => {
    const orderId = Number(req.params.id);
    const order =orders.find(order => order.id === orderId);
    if (!order) {
        return res.status(404).json({
            message: "Order Not Found"
        })
    }
    const items = orderItems.filter(orderItem => orderItem.orderId === orderId);

    res.json(items);
})

module.exports = router;