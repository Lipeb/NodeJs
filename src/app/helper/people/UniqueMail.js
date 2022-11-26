const peopleSchema = require('../../schema/PeopleSchema');
const Conflict = require('../../error/http/Conflict');

const EmailItsUnique = async (email) => {
  const unique = await peopleSchema.findOne({ email });

  if (unique) throw new Conflict('this email exist already');
};

module.exports = EmailItsUnique;
