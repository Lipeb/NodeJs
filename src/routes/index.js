const { Router } = require('express');
const CarRouter = require('./CarRouter');
const PeopleRouter = require('./PeopleRouter');
const AuthenticateRouter = require('./AuthenticateRouter');
const RentalRouter = require('./RentalRouter');

module.exports = (server) => {
  server.use((req, res, next) => {
    CarRouter(server, new Router());
    PeopleRouter(server, new Router());
    AuthenticateRouter(server, new Router());
    RentalRouter(server, new Router());
    next();
  });
};
