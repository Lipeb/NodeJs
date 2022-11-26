const RentalRepository = require('../repository/RentalRepository');
const UniqueCNPJ = require('../helper/rental/UniqueCNPJ');

class Affiliate {
  async searchDta(payload) {
    for (let i = 0; i < payload.endereco.length; i += 1) {
      const address = payload.endereco;
      const response = address[i];
      const data = RentalRepository.findCep(response.cep);
      const { cep, logradouro, complemento, bairro, localidade, uf } = data;
      response.cep = cep;
      response.logradouro = logradouro;
      response.complemento = complemento;
      response.bairro = bairro;
      response.localidade = localidade;
      response.uf = uf;
    }
    const result = await RentalRepository.create(payload);
    await UniqueCNPJ(payload.cnpj);
    return result;
  }
}

module.exports = new Affiliate();
