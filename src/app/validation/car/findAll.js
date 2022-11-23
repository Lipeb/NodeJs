const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      modelo: Joi.string().trim(),
      cor: Joi.string().trim(),
      ano: Joi.number().integer().min(1950).max(2022).required(),
      acessorios: Joi.array()
        .min(1)
        .items(
          Joi.object({
            descricao: Joi.string().trim().required()
          })
        )
        .unique((a, b) => a.descricao === b.descricao)
        .required(),
      quantidadePassageiros: Joi.number().integer(),
      limit: Joi.number().min(1),
      skip: Joi.number().min(0)
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
