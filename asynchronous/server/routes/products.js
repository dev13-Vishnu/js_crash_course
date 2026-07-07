const express = require('express');
const { products } = require('../database');

const router = express.Router();

router.get('/:id',(req,res) => {
    const productId = Number(req.params.id);
    const product = products.find(product => product.id === productId);
    if (!product){
        return res.status(404).json({
            message: "Product not found"
        })
    }

    res.json(product);
})


module.exports = router;