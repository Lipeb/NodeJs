const CarController = require('../app/controller/CarController');
const CreateValidation = require('../app/validation/car/create');
const FindAllValidation = require('../app/validation/car/findAll');
const IdValidation = require('../app/validation/idValidation');
const PatchValidation = require('../app/validation/car/patch');

module.exports = (server, routes, prefix = '/api/v1/car') => {
  routes.post('/', CreateValidation, CarController.create);
  routes.get('/', FindAllValidation, CarController.find);
  routes.get('/:id', IdValidation, CarController.findById);
  routes.put('/:id', IdValidation, CarController.update);
  routes.patch('/:id/acessorios/:accessoryId', IdValidation, PatchValidation, CarController.patch);
  routes.delete('/:id', IdValidation, CarController.delete);
  server.use(prefix, routes);
};
