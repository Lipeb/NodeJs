const PeopleService = require('../service/PeopleService');

class PeopleController {
  async create(req, res) {
    try {
      const result = await PeopleService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async find(req, res, next) {
    try {
      const { limit, offset, ...query } = req.query;
      const { docs, ...data } = await PeopleService.findAll(query, limit, offset);
      return res.status(200).json({
        pessoas: docs,
        total: data.totalDocs,
        limit: data.limit,
        offset: data.page,
        offsets: data.totalPages
      });
    } catch (err) {
      return next(err);
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const result = await PeopleService.findOne(id);

      if (!result) {
        return res.status(404).json({ message: 'Person not found' });
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const result = await PeopleService.update(id, req.body);

      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await PeopleService.delete(id);

      if (!result) {
        return res.status(404).json({ message: 'Person not found' });
      }

      return res.status(204).json();
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

module.exports = new PeopleController();
