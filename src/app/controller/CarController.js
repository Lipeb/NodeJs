const CarService = require('../service/CarService');

class CarController {
  async create(req, res) {
    try {
      const result = await CarService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }

  async find(req, res) {
    try {
      const result = await CarService.find(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const result = await CarService.findOne(id);

      if (!result) {
        return res.status(404).json({ message: 'Car not found' });
      }

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await CarService.delete(id);

      if (!result) {
        return res.status(404).json({ message: 'Car not found' });
      }

      return res.status(204).json();
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = new CarController();
