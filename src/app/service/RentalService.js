const RentalRepository = require('../repository/RentalRepository');

class RentalService {
  async create(payload) {
    const result = await RentalRepository.create(payload);
    return result;
  }

  async findAll(payload) {
    const result = await RentalRepository.findAll(payload);
    return result;
  }

  async findById(id) {
    const rental = await RentalRepository.findById(id);

    return rental;
  }
}

module.exports = new RentalService();
