const CarController = require('../app/controller/CarController');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', CarController.create);
  routes.get('/', CarController.find);
  routes.get('/:id', CarController.findById);
  routes.put('/:id', CarController.update);
  routes.delete('/:id', CarController.delete);
  server.use(prefix, routes);
};
