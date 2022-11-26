const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const AuthenticateRepository = require('../repository/AuthenticateRepository');
const AuthenticateConfig = require('../config/AuthenticateConfig.json');

class AuthenticationService {
  async Authenticate(login) {
    const result = await AuthenticateRepository.Authenticate(login);
    if (!result) throw Error('User not found');

    if (result.habilitado !== 'sim') if (result.habilitado !== 'Sim') throw Error('User not enabled');

    if (!(await bcrypt.compare(login.senha, result.senha))) throw Error('Invalid password');

    result.senha = undefined;

    const token = jwt.sign({ id: result.id }, AuthenticateConfig.secret, {
      expiresIn: 86400
    });

    return { result, token };
  }
}

module.exports = new AuthenticationService();
