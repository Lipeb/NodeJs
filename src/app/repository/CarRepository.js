const schema = require('../schema/CarSchema');

class CarRepository {
  async create(car) {
    return schema.create(car);
  }

  async find(payload) {
    return schema.find(payload);
  }
}

module.exports = new CarRepository();
