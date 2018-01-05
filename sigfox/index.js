const ROUTER = require('express').Router();
const MIDDLEWARE = require('./requests-middleware');

const DoorApi = require('./door');

ROUTER.use('/door', DoorApi);

module.exports = ROUTER;

