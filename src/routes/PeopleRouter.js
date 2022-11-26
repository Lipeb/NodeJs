const PeopleController = require('../app/controller/PeopleController');
const CreateValidation = require('../app/validation/people/create');
const IdValidation = require('../app/validation/idValidation');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', CreateValidation, PeopleController.create);
  routes.get('/', PeopleController.find);
  routes.get('/:id', IdValidation, PeopleController.findById);
  routes.put('/:id', IdValidation, PeopleController.update);
  routes.delete('/:id', IdValidation, PeopleController.delete);
  server.use(prefix, routes);
};
