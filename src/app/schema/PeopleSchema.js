const mongoose = require('mongoose');
const moment = require('moment');
const mongoosePaginate = require('mongoose-paginate-v2');
const bcrypt = require('bcryptjs');

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

PeopleSchema.pre('save', async function password(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});

PeopleSchema.plugin(mongoosePaginate);

const People = mongoose.model('person', PeopleSchema);

module.exports = People;
