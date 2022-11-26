const PeopleController = require('../app/controller/PeopleController');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', PeopleController.create);
  routes.get('/', PeopleController.find);
  routes.get('/:id', PeopleController.findById);
  routes.put('/:id', PeopleController.update);
  routes.delete('/:id', PeopleController.delete);
  server.use(prefix, routes);
};
