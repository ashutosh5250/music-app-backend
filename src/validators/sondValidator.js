const Joi = require("joi");

const songSchema = Joi.object({
   title: Joi.string().required(),
	artist: Joi.string().required(),
	url: Joi.string().required()
})

module.exports = songSchema;