const CarService = require('../service/CarService');
const BadRequest = require('../error/http/BadRequest');
const Conflict = require('../error/http/Conflict');
const NotFound = require('../error/http/NotFound');
const RequestNotFound = require('../error/RequestNotFound');

class CarController {
  async create(req, res, next) {
    try {
      const result = await CarService.create(req.body);
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
      const { docs, ...data } = await CarService.findAll(query, limit, offset);
      return res.status(200).json({
        veiculos: docs,
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
      const result = await CarService.findById(id);
      return res.status(200).json(result);
    } catch (err) {
      if (err instanceof RequestNotFound) {
        return new NotFound(err.message);
      }
      return next(err);
    }
  }

  async update(req, res, next) {
    const { id } = req.params;
    try {
      const car = await CarService.update(id, req.body);
      return res.status(200).json(car);
    } catch (err) {
      if (err instanceof RequestNotFound) {
        return new NotFound(err.message);
      }
      return next(err);
    }
  }

  async patch(req, res, next) {
    const { descricao } = req.body;
    const { id, accessoryId } = req.params;
    try {
      const car = await CarService.patch(id, {
        _id: accessoryId,
        descricao
      });
      return res.status(200).json(car);
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
      const result = CarService.delete(id);
      return res.status(204).json(result);
    } catch (err) {
      if (err instanceof RequestNotFound) {
        return new NotFound(err.message);
      }
      return next(err);
    }
  }
}

module.exports = new CarController();
