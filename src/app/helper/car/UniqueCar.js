const carSchema = require('../../schema/CarSchema');
const Conflict = require('../../error/http/Conflict');

const CarItsUnique = async (modelo) => {
  const unique = await carSchema.findOne({ modelo });

  if (unique) throw new Conflict('this car model already exists');
};

module.exports = CarItsUnique;
