const AuthenticateService = require('../service/AuthenticateService');

class AuthenticateController {
  async Authenticate(req, res) {
    try {
      const { email, senha } = req.body;
      const result = await AuthenticateService.Authenticate({ email, senha });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = new AuthenticateController();
