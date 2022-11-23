const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
  modelo: {
    type: String,
    required: true
  },
  cor: {
    type: String,
    required: true
  },
  ano: {
    type: String,
    required: true
  },
  acessorios: [
    {
      descricao: { type: String, required: true }
    }
  ],
  quantidadePassageiros: {
    type: Number,
    required: true
  }
});

CarSchema.set('toJSON', {
  transform(doc, ret) {
    delete ret.__v;
  }
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;