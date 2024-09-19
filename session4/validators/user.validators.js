const Joi = require("joi")
const validGenders = ['male','female'];

// const userSearchSchema = Joi.object({
//     gender :Joi.string().valid(...validGenders),
//     age : Joi.number().integer().min(0).max(100),
// }).min(1);

const userSearchSchema = Joi.object({
    gender :Joi.string().valid(...validGenders),
    age : Joi.number().integer().min(0).max(100),
}).or("gender","age");

const getQueryErrors = (data) => userSearchSchema.validate(data);

module.exports = {getQueryErrors};