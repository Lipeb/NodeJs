const RentalRepository = require('../repository/RentalRepository');
const Affiliate = require('../utils/AffiliateAdress');

class RentalService {
  async create(payload) {
    await Affiliate.data(payload);
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

  async update(id, payload) {
    const result = await RentalRepository.update(id, payload);
    return result;
  }

  async delete(id) {
    const result = await RentalRepository.delete(id);
    return result;
  }
}

module.exports = new RentalService();
