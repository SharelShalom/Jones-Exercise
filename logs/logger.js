const { createLogger, format, transports, config } = require('winston');
const { combine, timestamp, json } = format;
require('winston-mongodb');

const logger = createLogger({
    format: combine(
        timestamp({
            format: 'YY-MM-DD HH:mm:ss'
        }),
        json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logfile.log'}),
        new transports.MongoDB({ db: 'mongodb://localhost/jones', options: { useUnifiedTopology: true }, level: 'error'})
    ],
    exceptionHandlers: [
        new transports.Console(),
        new transports.File({ filename: 'generalException.log' })
    ]
});

module.exports = logger;