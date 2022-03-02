import Joi from 'joi';

export default Joi.object({
    id: Joi.number().min(1).required(),
    name: Joi.string().min(3).trim().required(),
    email: Joi.string().min(1).trim().required(),
    contact: Joi.string().min(1).trim().required(),
    number: Joi.string().min(1).required(),
});
