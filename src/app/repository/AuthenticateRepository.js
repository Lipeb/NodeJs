const PeopleSchema = require('../schema/PeopleSchema');

class AuthenticateRepository {
  async findAuthenticate(email) {
    return PeopleSchema.findOne(email).select('+senha');
  }
}
module.exports = new AuthenticateRepository();
