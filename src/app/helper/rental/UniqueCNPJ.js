const rentalSchema = require('../../schema/RentalSchema');
const Conflict = require('../../error/http/Conflict');

const CnpjItsUnique = async (cnpj) => {
  const unique = await rentalSchema.findOne({ cnpj });

  if (unique) throw new Conflict('this cnpj exist already');
};

module.exports = CnpjItsUnique;
