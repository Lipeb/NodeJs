const Joi = require('joi');
const BadRequest = require('../../error/http/BadRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'br'] }
      }),
      senha: Joi.string().min(6).required()
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
