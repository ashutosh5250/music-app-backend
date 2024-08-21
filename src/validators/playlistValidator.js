const Joi = require("joi");

const playListSchema = Joi.object({
   name: Joi.string().required(),
   user: Joi.string().required(),
   songs: Joi.array().items(Joi.string()),
   img: Joi.string()
});


module.exports = playListSchema