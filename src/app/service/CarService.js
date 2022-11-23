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

  async update(id, payload) {
    const result = await CarRepository.update(id, payload);
    return result;
  }

  async delete(id) {
    const result = await CarRepository.delete(id);
    return result;
  }
}

module.exports = new CarService();
