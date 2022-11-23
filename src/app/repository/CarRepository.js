const schema = require('../schema/CarSchema');

class CarRepository {
  async create(car) {
    return schema.create(car);
  }

  async findAll(payload) {
    return schema.find(payload);
  }

  async findById(id) {
    return schema.findById({ _id: id });
  }
}

module.exports = new CarRepository();
