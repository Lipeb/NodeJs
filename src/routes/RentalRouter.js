const RentalController = require('../app/controller/RentalController');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', RentalController.create);
  routes.get('/', RentalController.find);
  routes.get('/:id', RentalController.findById);
  routes.delete('/:id', RentalController.delete);
  server.use(prefix, routes);
};
