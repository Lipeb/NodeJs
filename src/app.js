const express = require('express');
const cors = require('cors');
const router = require('./routes');
const ErrorHandler = require('./app/middlewares/ErrorHandler');

require('./infra/database/mongo/index');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    router(this.server);
  }

  errorHandler() {
    this.server.use(ErrorHandler);
  }
}

module.exports = new App().server;
