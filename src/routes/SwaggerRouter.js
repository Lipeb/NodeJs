const swaggerUi = require('swagger-ui-express');
const swaggerDocumentation = require('../../Documentation/SwaggerDocumentation.json');

module.exports = (server, routes, prefix = '/api/v1/api-docs') => {
  routes.use('/', swaggerUi.serve);
  routes.get('/', swaggerUi.setup(swaggerDocumentation));
  server.use(prefix, routes);
};
