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

  async update(id, payload) {
    return schema.findByIdAndUpdate(id, payload, { new: true });
  }

  async delete(payload) {
    return schema.findByIdAndDelete(payload);
  }
}

module.exports = new CarRepository();
