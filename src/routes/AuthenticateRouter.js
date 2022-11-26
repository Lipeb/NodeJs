const AuthenticateController = require('../app/controller/AuthenticateController');
const CreateValidation = require('../app/validation/authenticate/create');

module.exports = (server, routes, prefix = '/api/v1/authenticate') => {
  routes.post('/', CreateValidation, AuthenticateController.authenticate);
  server.use(prefix, routes);
};
