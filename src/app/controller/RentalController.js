const RentalService = require('../service/RentalService');
const BadRequest = require('../error/http/BadRequest');
const Conflict = require('../error/http/Conflict');
const NotFound = require('../error/http/NotFound');
const RequestNotFound = require('../error/RequestNotFound');

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

  async find(req, res, next) {
    try {
      const { limit, offset, ...query } = req.query;
      const { docs, ...data } = await RentalService.findAll(query, limit, offset);
      return res.status(200).json({
        locadoras: docs,
        total: data.totalDocs,
        limit: data.limit,
        offset: data.page,
        offsets: data.totalPages
      });
    } catch (err) {
      return next(err);
    }
  }

  async findById(req, res, next) {
    const { id } = req.params;
    try {
      const result = await RentalService.findById(id);
      return res.status(200).json(result);
    } catch (err) {
      if (err instanceof RequestNotFound) {
        return new NotFound(err.message);
      }
      return next(err);
    }
  }

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      const result = await RentalService.delete(id);
      return res.status(204).json(result);
    } catch (err) {
      if (err instanceof RequestNotFound) {
        return new NotFound(err.message);
      }
      return next(err);
    }
  }
}

module.exports = new RentalController();
