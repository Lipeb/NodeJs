const schema = require('../schema/CarSchema');

class CarRepository {
  async create(car) {
    return schema.create(car);
  }
}

module.exports = new CarRepository();
