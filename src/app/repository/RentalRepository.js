const schema = require('../schema/RentalSchema');

class RentalRepository {
  async create(rental) {
    return schema.create(rental);
  }
}

module.exports = new RentalRepository();
