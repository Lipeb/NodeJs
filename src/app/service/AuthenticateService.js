const AuthenticateRepository = require('../repository/AuthenticateRepository');

class AuthenticateService {
  async findAuthenticate(payload) {
    return AuthenticateRepository.findAuthenticate(payload);
  }
}

module.exports = new AuthenticateService();
