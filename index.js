const express = require('express');
const app = express();
const logger = require('./logs/logger');

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();

app.listen(3000, () => logger.info('Listening on port 3000...'));