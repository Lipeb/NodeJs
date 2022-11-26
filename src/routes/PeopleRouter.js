const PeopleController = require('../app/controller/PeopleController');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', PeopleController.create);
  routes.get('/', PeopleController.find);
  routes.get('/:id', PeopleController.findById);
  server.use(prefix, routes);
};
