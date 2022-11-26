const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
  async create(payload) {
    const result = await PeopleRepository.create(payload);
    return result;
  }

  async find(payload) {
    const result = await PeopleRepository.find(payload);
    return result;
  }
}

module.exports = new PeopleService();
