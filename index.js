const CONFIG = require('./config');

const EXPRESS = require('express');
const APP = EXPRESS();
const ROUTER = EXPRESS.Router();
const CORS = require('cors');
const BODY_PARSER = require('body-parser');
const SigfoxApi = require('./sigfox');

let corsMiddleware = CORS({
  'origin': [process.env.URL, 'http://localhost:4200'],
  'methods': ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  'preflightContinue': true,
  'allowedHeaders': ['Content-Type'],
  'optionsSuccessStatus': 204
});

APP.use(BODY_PARSER.json());
APP.use(corsMiddleware);
APP.options('*', corsMiddleware);

ROUTER.use('/sigfox', SigfoxApi);
APP.use('/api', ROUTER);

let port = CONFIG.SERVER.PORT || 8000;
APP.listen(port, () => {
  console.log('Server started! Listening on ' + port);

  if (CONFIG.DEBUG) {
    require('./debug')(APP);
  }
});