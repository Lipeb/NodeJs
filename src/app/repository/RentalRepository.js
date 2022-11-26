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
}

module.exports = new RentalRepository();
