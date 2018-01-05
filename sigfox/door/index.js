const RP = require('request-promise');
const BASE_URL = require('../../config').SIGFOX.BASE_URL;
const ROUTER = require('express').Router();

module.exports = ROUTER;

ROUTER.post('/open', open);
ROUTER.post('/close', close);
ROUTER.get('/status', status);

function open(req, res) {
  return res.sendStatus(200);
}

function close(req, res) {
  return res.sendStatus(200);
}

function status(req, res) {
  return res.status(200).json({
    open: false,
    last_communication: new Date()
  });
}