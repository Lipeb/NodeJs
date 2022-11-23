const mongoose = require('mongoose');
const moment = require('moment');

const PeopleSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  data_nascimento: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  senha: {
    type: String,
    required: true,
    select: false
  },
  habilitado: {
    type: String,
    enum: ['sim', 'não'],
    required: true
  }
});

PeopleSchema.set('toJSON', {
  transform(doc, ret) {
    ret.data_nascimento = moment(ret.data_nascimento).format('DD/MM/YYYY');
    delete ret.createdAt;
    delete ret.updatedAt;
    delete ret.__v;
    return ret;
  }
});

const People = mongoose.model('person', PeopleSchema);

module.exports = People;
