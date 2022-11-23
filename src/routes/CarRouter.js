const CarController = require('../app/controller/CarController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', CarController.create);
  server.use(prefix, routes);
};
