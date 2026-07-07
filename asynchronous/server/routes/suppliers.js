const express = require('express');
const { suppliers } = require('../database');

const router = express.Router();

router.get('/:id',(req,res) => {
    const supplierId = Number(req.params.id);
    const supplier = suppliers.find(supplier => supplier.id === supplierId);

    if (!supplier) {
        return res.status(404).json({
            message: "Supplier not found"
        })
    }

    res.json(supplier);
})
module.exports = router;