const Joi = require('joi');
const BadRequest = require('../../error/http/BadRequest');

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
    if (err) {
      throw new BadRequest({
        details: err.details.map(() => err.message)
      });
    }
    next();
  } catch (err) {
    next(err);
  }
};
