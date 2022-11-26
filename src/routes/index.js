const { Router } = require('express');
const CarRouter = require('./CarRouter');
const PeopleRouter = require('./PeopleRouter');

module.exports = (server) => {
  server.use((req, res, next) => {
    CarRouter(server, new Router());
    PeopleRouter(server, new Router());
    next();
  });
};
