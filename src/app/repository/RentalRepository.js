const schema = require('../schema/RentalSchema');

class RentalRepository {
  async create(rental) {
    return schema.create(rental);
  }

  async findAll(payload) {
    const { page = 1, limit = 100, ...query } = payload;
    return schema.paginate(
      { ...query },
      {
        limit: Number(limit),
        page: Number(page),
        skip: (Number(page) - 1) * Number(limit)
      }
    );
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

module.exports = new RentalRepository();
