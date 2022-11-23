const peopleService = require('../service/PeopleService');

class PeopleController {
  async create(req, res) {
    try {
      const result = await peopleService.create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = new PeopleController();
