import Joi from 'joi';

export default Joi.object({
    id: Joi.number().min(1),
    name: Joi.string().min(3).trim().required(),
    email: Joi.string().min(1).trim(),
    contact: Joi.string().min(1).trim(),
    number: Joi.string().min(1),
});
