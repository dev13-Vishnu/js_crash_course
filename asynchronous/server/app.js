const express = require('express');
require('dotenv').config();
const customerRouter = require('./routes/customers')
const ordersRouter = require('./routes/orders')
const productsRouter = require('./routes/products')
const suppliersRouter = require('./routes/suppliers')


const app = express();

const PORT = process.env.PORT || 5000

app.use('/customers',customerRouter)
app.use('/orders',ordersRouter);
app.use('/products',productsRouter);
app.use('/suppliers',suppliersRouter);

app.listen(PORT,()=> {
    console.log(`server listening in : http://localhost:${PORT}`)
})