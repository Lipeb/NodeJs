const PeopleRepository = require('../repository/PeopleRepository');

class PeopleService {
  async create(payload) {
    const result = await PeopleRepository.create(payload);
    return result;
  }

  async find(payload) {
    const result = await PeopleRepository.findAll(payload);
    return result;
  }

  async findById(id) {
    const result = PeopleRepository.findById(id);
    return result;
  }

  async update(id, payload) {
    const result = await PeopleRepository.update(id, payload);
    return result;
  }

  async delete(payload) {
    const result = await PeopleRepository.delete(payload);
    return result;
  }
}

module.exports = new PeopleService();
