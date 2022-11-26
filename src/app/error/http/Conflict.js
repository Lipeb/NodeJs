const HttpError = require('./HttpError');

class UniqueEntryError extends HttpError {
  constructor({ details }) {
    super(409, 'Unique Entry');

    this.message = 'already exist';
    this.body = { details };
  }
}

module.exports = UniqueEntryError;
