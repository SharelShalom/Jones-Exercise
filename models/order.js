const Joi = require('joi');
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        minlength: 2,
        maxlength: 50
    },
    phone: {
        required: true,
        type: String,
        minlength: 7,
        maxlength: 20
    },
    dishes: {
        required: true,
        type: Array
    },
    created_at: {
        required: true,
        type: Date
    }
});

const Order = mongoose.model('Order', orderSchema);

function validateOrder(order) {
    const schema = Joi.object({
        name: Joi.string().min(2).max(50).required(),
        phone: Joi.string().min(7).max(20).required(),
        dishes: Joi.array().items(Joi.string())
    });

    return schema.validate(order);
}

exports.Order = Order;
exports.validate = validateOrder;