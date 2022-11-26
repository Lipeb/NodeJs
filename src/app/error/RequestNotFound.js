class RequestNotFound extends Error {
  constructor(message) {
    super(message);

    this.name = 'Request Not Found';
  }
}

module.exports = RequestNotFound;
