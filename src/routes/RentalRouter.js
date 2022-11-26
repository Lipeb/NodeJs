const RentalController = require('../app/controller/RentalController');
const CreateValidation = require('../app/validation/rental/create');
const FindAllValidation = require('../app/validation/rental/findAll');
const IdValidation = require('../app/validation/idValidation');

module.exports = (server, routes, prefix = '/api/v1/rental') => {
  routes.post('/', CreateValidation, RentalController.create);
  routes.get('/', FindAllValidation, RentalController.find);
  routes.get('/:id', IdValidation, RentalController.findById);
  routes.put('/:id', IdValidation, RentalController.update);
  routes.delete('/:id', IdValidation, RentalController.delete);
  server.use(prefix, routes);
};
