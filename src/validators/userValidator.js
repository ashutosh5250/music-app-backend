const Joi = require("joi");
const passwordComplaxity = require("joi-password-complexity");
 
 const signUpSchema =  Joi.object({
      userName:Joi.string().min(5).max(10).required(),
      email:Joi.string().email().required(),
      password:passwordComplaxity().required(),
      gender:Joi.string().valid("male","female").required()
    })


const singInSchema = Joi.object({
      email:Joi.string().email().required(),
      password:Joi.string().required()
    })

  module.exports = {singInSchema,signUpSchema};