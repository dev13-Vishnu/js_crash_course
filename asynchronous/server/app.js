const express = require('express');
const { customers } = require('./database');
require('dotenv').config();
const customerRouter = require('./routes/customer')
const ordersRouter = require('./routes/orders')
const productsRouter = require('./routes/products')
const suppliersRouter = require('./routes/suppliers')


const app = express();

const PORT = process.env.PORT || 5000

console.log(customers)
app.use('/customer',customerRouter)
app.use('/orders',ordersRouter);
app.use('/products',productsRouter);
app.use('/suppliers',suppliersRouter);

app.listen(PORT,()=> {
    console.log(`server listening in : http://localhost:${PORT}`)
})