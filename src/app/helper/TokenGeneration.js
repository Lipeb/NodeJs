const jwt = require('jsonwebtoken');
const AuthenticateConfig = require('../config/AuthenticateConfig.json');

function tokenGenerate(params = {}) {
  return jwt.sign({ params }, AuthenticateConfig.secret, {
    expiresIn: 86400
  });
}

module.exports = tokenGenerate;
