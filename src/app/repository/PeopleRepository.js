const schema = require('../schema/PeopleSchema');

class PeopleRepository {
  async create(payload) {
    return schema.create(payload);
  }

  async findAll(payload) {
    return schema.find(payload);
  }

  async findById(id) {
    return schema.findById({ _id: id });
  }
}

module.exports = new PeopleRepository();
