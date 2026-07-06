const express = require('express');
const { orderItems } = require('../database');

const router = express.Router();

router.get('/:id/items',(req,res)=> {
    const orderItemsId = Number(req.params.id);
    const items = orderItems.filter(orderItem => orderItem.orderId === orderItemsId);

    res.json(items);
})

module.exports = router;