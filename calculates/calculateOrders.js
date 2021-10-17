const { Order } = require('../models/order');

async function calculateLast24() {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const orders = await Order.find({ created_at: { $gt: yesterday } });
    return orders;
}

async function calculateTodayOrders() {
    var todayTime = new Date();
    todayTime.setUTCHours(0, 0, 0, 0);
    const orders = await Order.find({ created_at: { $gt: todayTime } });
    return orders;
}

module.exports = { calculateLast24, calculateTodayOrders };