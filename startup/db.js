const mongoose = require('mongoose');
const logger = require('../logs/logger');

module.exports = function() {
    mongoose.connect('mongodb://localhost/jones', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => logger.info('Connected to MongoDB...'))
    .catch(err => logger.error('Could not conneted to MongoDB...',err));
}