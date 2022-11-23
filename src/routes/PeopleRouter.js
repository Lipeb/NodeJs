const PeopleController = require('../app/controller/PeopleController');

module.exports = (server, routes, prefix = '/api/v1/people') => {
  routes.post('/', PeopleController.create);
  server.use(prefix, routes);
};
