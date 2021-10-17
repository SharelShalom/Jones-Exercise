const express = require('express');
const router = express.Router();
const { Order, validate } = require('../models/order');
const { calculateLast24 , calculateTodayOrders } = require('../calculates/calculateOrders');

router.get('/', async (req, res, next) => {
    try {
        const orders = await Order.find();
        res.send(orders);
    }
    catch(ex) {
        next(ex);
    }
});

router.get('/last24', async (req, res, next) => {
    try {
        const orders = await calculateLast24();

        res.send(orders);
    }
    catch(ex) {
        next(ex);
    }
});

router.get('/today', async (req, res, next) => {
    try{
        const orders = await calculateTodayOrders();

        res.send(orders);
    }
    catch(ex) {
        next(ex);
    }
});

router.post('/', async (req, res) => {
    try{
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
    
        let order = new Order({
            name: req.body.name,
            phone: req.body.phone,
            dishes: req.body.dishes,
            created_at: new Date()
        });
        order = await order.save();
    
        res.send(order);
    }
    catch(ex) {
        next(ex);
    }
});


module.exports = router;