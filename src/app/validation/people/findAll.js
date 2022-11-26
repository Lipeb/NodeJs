const Joi = require('joi').extend(require('@joi/date'));
const BadRequest = require('../../error/http/BadRequest');
const isCPF = require('../../helper/people/IsCPF');
const is18 = require('../../helper/people/Is18');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim(),
      cpf: Joi.string()
        .trim()
        .min(11)
        .max(11)
        .custom((value, help) => {
          if (isCPF(value)) {
            return help.message('Invalid CPF');
          }
          return true;
        }),
      data_nascimento: Joi.date()
        .format('DD/MM/YYYY')
        .less('01/01/2004')
        .max('now')
        .custom((value, help) => {
          if (is18(value)) {
            return help.message('Person should to be 18 years old');
          }
          return true;
        }),
      email: Joi.string()
        .trim()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ['com', 'net', 'br'] }
        }),
      senha: Joi.string().min(6),
      habilitado: Joi.string().trim().valid('sim', 'não')
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
