const HttpError = require('./HttpError');

class BadRequest extends HttpError {
  constructor({ details }) {
    super(400, 'Invalid request');

    this.name = 'Bad Request';
    this.body = { details };
  }
}

module.exports = BadRequest;
