const Joi = require('joi');
const BadRequest = require('../../error/http/BadRequest');
const isCNPJ = require('../../helper/rental/IsCNPJ');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim().required(),
      cnpjs: Joi.string()
        .trim()
        .min(14)
        .max(14)
        .custom((value, help) => {
          if (isCNPJ(value)) {
            return help.message('Invalid CNPJ');
          }
          return true;
        })
        .required(),
      atividades: Joi.string().trim().required(),
      endereco: Joi.array()
        .unique()
        .items({
          cep: Joi.string().min(1),
          logradouro: Joi.string(),
          complemento: Joi.string(),
          bairro: Joi.string(),
          number: Joi.string(),
          localidade: Joi.string(),
          uf: Joi.string(),
          isFilial: Joi.boolean()
        })
        .min(1)
    });

    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true
    };

    const { err } = await schema.validate(req.body, options);

    if (err) {
      throw new BadRequest({
        details: err.details.map(() => err.message)
      });
    }
    return next();
  } catch (err) {
    return next(err);
  }
};
