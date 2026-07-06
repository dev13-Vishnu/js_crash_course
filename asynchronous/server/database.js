const customers = [
    {
        id: 1,
        name: "Vishnu"
    },
    {
        id: 2,
        name: "Alice"
    },
    {
        id: 3,
        name: "Bob"
    }
];

const orders = [
    {
        id: 101,
        customerId: 1,
        orderDate: "2025-06-01"
    },
    {
        id: 102,
        customerId: 1,
        orderDate: "2025-06-15"
    },
    {
        id: 103,
        customerId: 2,
        orderDate: "2025-06-20"
    }
];

const orderItems = [
    {
        orderId: 101,
        productId: 1,
        quantity: 2
    },
    {
        orderId: 101,
        productId: 3,
        quantity: 1
    },
    {
        orderId: 102,
        productId: 2,
        quantity: 4
    },
    {
        orderId: 103,
        productId: 4,
        quantity: 2
    }
];

const products = [
    {
        id: 1,
        name: "Mechanical Keyboard",
        supplierId: 1,
        price: 3500
    },
    {
        id: 2,
        name: "Gaming Mouse",
        supplierId: 2,
        price: 1800
    },
    {
        id: 3,
        name: "27-inch Monitor",
        supplierId: 3,
        price: 15000
    },
    {
        id: 4,
        name: "USB-C Hub",
        supplierId: 2,
        price: 2500
    }
];

const suppliers = [
    {
        id: 1,
        name: "KeyTech"
    },
    {
        id: 2,
        name: "TechWorld"
    },
    {
        id: 3,
        name: "DisplayHub"
    }
];

module.exports = {
    customers,
    orders,
    orderItems,
    products,
    suppliers,
}