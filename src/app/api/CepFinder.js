const axios = require('axios');

class ByCEP {
  async findByCep(cep) {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    return result.data;
  }
}

module.exports = new ByCEP();
