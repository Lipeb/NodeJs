const peopleSchema = require('../schema/PeopleSchema');

class PeopleRepository {
  async create(payload) {
    return peopleSchema.create(payload);
  }

  async find(payload) {
    return peopleSchema.find(payload);
  }
}

module.exports = new PeopleRepository();
