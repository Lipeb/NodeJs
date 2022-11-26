const RentalService = require('../service/RentalService');
const BadRequest = require('../error/http/BadRequest');
const Conflict = require('../error/http/Conflict');
// const NotFound = require('../error/http/NotFound');
// const RequestNotFound = require('../error/RequestNotFound');

class RentalController {
  async create(req, res, next) {
    try {
      const result = await RentalService.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      if (err instanceof Conflict) {
        return new BadRequest({ details: err.entrys });
      }
      return next(err);
    }
  }
}

module.exports = new RentalController();
