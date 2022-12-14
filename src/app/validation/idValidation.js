const Joi = require('joi');
const BadRequest = require('../error/http/BadRequest');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.string().min(24).max(24)
    });

    const options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true
    };

    const { err } = await schema.validate(req.params, options);

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
