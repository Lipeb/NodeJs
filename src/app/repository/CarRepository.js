const schema = require('../schema/CarSchema');

class CarRepository {
  async create(car) {
    return schema.create(car);
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

  async patch(id, payload) {
    return schema.findOneAndUpdate(
      { id, 'acessorios._id': payload._id },
      { $set: { 'acessorios.$.descricao': payload.descricao } },
      { new: true }
    );
  }

  async delete(payload) {
    return schema.findByIdAndDelete(payload);
  }
}

module.exports = new CarRepository();
