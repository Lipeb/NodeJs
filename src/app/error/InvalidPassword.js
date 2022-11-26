class InvalidPassword extends Error {
  constructor(message) {
    super(message);

    this.name = 'Invalid Password';
  }
}

module.exports = InvalidPassword;
