import * as Joi from 'joi';

// Esto se ejecuta antes que env.config.ts
export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3005),
  DEFAULT_LIMIT: Joi.number().default(6),
});
