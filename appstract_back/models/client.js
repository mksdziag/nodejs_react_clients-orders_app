const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  name: {
    type: String,
    minlength: 3,
    required: true,
  },
  surname: {
    type: String,
    minlength: 3,
    required: true,
  },
});

const validate = client => {
  const schema = Joi.object().keys({
    name: Joi.string()
      .min(3)
      .max(50)
      .label('Name')
      .required(),
    surname: Joi.string()
      .min(3)
      .max(50)
      .label('Surname')
      .required(),
  });

  return Joi.validate(client, schema);
};

const Client = mongoose.model('Client', clientSchema);

module.exports = {
  Client,
  validate,
};
