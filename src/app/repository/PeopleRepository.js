const peopleSchema = require('../schema/PeopleSchema');

class PeopleRepository {
  async create(payload) {
    return peopleSchema.create(payload);
  }
}

module.exports = new PeopleRepository();
