const CarRepository = require('../repository/CarRepository');

class CarService {
  async create(payload) {
    const result = await CarRepository.create(payload);
    return result;
  }

  async findAll(payload) {
    const result = await CarRepository.findAll(payload);
    return result;
  }

  async findById(id) {
    const result = await CarRepository.findById(id);
    return result;
  }
}

module.exports = new CarService();
