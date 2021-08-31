const joi = require("joi");

const validator = (req, res, next) => {
  const schema = joi.object({
    name: joi
      .string()
      .trim()
      .pattern(/\p{L}+$/u)
      .min(2)
      .max(20)
      .required()
      .messages({
        "string.min": "Your name must be at least 2 characters long",
        "string.max": "Your name cannot have more than 20 characters",
        "string.pattern.base": "Your name can't contain numbers",
      }),
    lastName: joi
      .string()
      .trim()
      .pattern(/\p{L}+$/u)
      .min(2)
      .max(20)
      .required()
      .messages({
        "string.min": "Your last name must be at least 2 characters long",
        "string.max": "Your last name cannot have more than 20 characters",
        "string.pattern.base": "Your last name can't contain numbers",
      }),
    email: joi.string().trim().required().email().messages({
      "string.email": "Please enter a valid email",
    }),
    password: joi.string().trim().min(4).required().messages({
      "string.min": "Your password length must be at least 4 characters long",
      "string.max": "Your password cannot have more than 6 characters",
    }),
    photoUrl: joi
      .string()
      .trim()
      .pattern(/(https:|http:|www\.)\S*/)
      .min(4)
      .required()
      .messages({
        "string.pattern.base": "Please enter a valid URL format",
      }),
    country: joi.string().trim().min(2).max(20).required(),
    google: joi.boolean().required(),
  });
  const validation = schema.validate(req.body, { abortEarly: false });
  if (!validation.error) {
    next();
  } else {
    res.json({ success: false, errors: validation.error.details });
  }
};

module.exports = validator;
// /^(https:|http:|www\.)\S*/gm    regexppara urls
