const PeopleRepository = require('../repository/PeopleRepository');
const UniqueCPF = require('../helper/people/UniqueCPF');
const UniqueMail = require('../helper/people/UniqueMail');

class PeopleService {
  async create(payload) {
    await UniqueCPF(payload.cpf);
    await UniqueMail(payload.email);
    const result = await PeopleRepository.create(payload);
    return result;
  }

  async findAll(payload) {
    const result = await PeopleRepository.findAll(payload);
    return result;
  }

  async findById(id) {
    const result = await PeopleRepository.findById(id);
    return result;
  }

  async update(id, payload) {
    const result = await PeopleRepository.update(id, payload);
    return result;
  }

  async delete(id) {
    const result = await PeopleRepository.delete(id);
    return result;
  }
}

module.exports = new PeopleService();
