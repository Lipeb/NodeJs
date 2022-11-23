const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      acessorios: Joi.array()
        .min(2)
        .items(
          Joi.object({
            descricao: Joi.string().trim().required()
          })
        )
        .unique((a, b) => a.descricao === b.descricao)
        .required()
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
