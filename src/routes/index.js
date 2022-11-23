const { Router } = require('express');
const CarRouter = require('./CarRouter');

module.exports = (server) => {
  server.use((req, res, next) => {
    CarRouter(server, new Router());
    next();
  });
};
