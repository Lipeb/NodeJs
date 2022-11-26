const Bcrypt = require('bcryptjs');
const AuthenticateService = require('../service/AuthenticateService');
const TokenGenerate = require('../helper/TokenGeneration');
const NotFound = require('../error/http/NotFound');
const BadRequest = require('../error/http/BadRequest');
const RequestNotFound = require('../error/RequestNotFound');
const InvalidPassword = require('../error/InvalidPassword');

class AuthenticateController {
  async authenticate(req, res, next) {
    const { email, senha } = req.body;
    try {
      const user = await AuthenticateService.findAuthenticate({ email });
      if (!user) {
        throw new NotFound();
      }
      if (!(await Bcrypt.compare(senha, user.senha))) {
        throw new InvalidPassword();
      }

      user.senha = undefined;

      const token = TokenGenerate({ id: user.id });

      res.send({ user, token });
    } catch (err) {
      if (err instanceof RequestNotFound) {
        next(new BadRequest(err.message));
      }
      next(err);
    }
  }
}

module.exports = new AuthenticateController();
