const CONFIG = require('../config');
const SIGFOX = CONFIG.SIGFOX;

module.exports = {
  authentication: authentication
};

/**
 * Adds the authentication in the requests to Sigfox.
 * @param req
 * @param res
 * @param next
 */
function authentication(req, res, next) {
  let authorization = SIGFOX.LOGIN + ':' + SIGFOX.PASSWORD;
  req.setHeader('Authorization', 'Basic ' + authorization);

  next();
}