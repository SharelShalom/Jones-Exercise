const logger = require('../logs/logger');

module.exports = function() {
    process.on('unhandledRejection', (reason, promise) => {
        logger.error(reason);
    });

    process.on('uncaughtException', (reason, promise) => {
        logger.error(reason);
    });
}