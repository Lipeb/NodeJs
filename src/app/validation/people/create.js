const Joi = require('joi').extend(require('@joi/date'));

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim().required(),
      cpf: Joi.string()
        .required()
        .pattern(/^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/)
        .min(11)
        .max(14),
      data_nascimento: Joi.date().required().format('DD/MM/YYYY').less('01/01/2004').max('now'),
      email: Joi.string().trim().email().required(),
      senha: Joi.string().required().min(6),
      habilitado: Joi.string().trim().valid('sim', 'não').required()
    });

    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true
    };

    const { err } = await schema.validate(req.body, options);
    if (err) throw err;
    return next();
  } catch (err) {
    return res.status(400).json(err.message);
  }
};
