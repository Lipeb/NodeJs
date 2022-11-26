const peopleSchema = require('../../schema/PeopleSchema');
const Conflict = require('../../error/http/Conflict');

const CpfItsUnique = async (cpf) => {
  const unique = await peopleSchema.findOne({ cpf });

  if (unique) throw new Conflict('this cpf exist already');
};

module.exports = CpfItsUnique;
