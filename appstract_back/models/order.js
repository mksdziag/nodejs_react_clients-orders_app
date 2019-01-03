const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  amount: {
    type: Number,
    min: 0.01,
    required: true,
  },
});

const validate = order => {
  const joiSchema = Joi.object().keys({
    clientId: Joi.string()
      .min(1)
      .max(50)
      .label('ClientId')
      .required(),
    amount: Joi.number()
      .min(0.01)
      .max(100000000)
      .label('Amount')
      .required(),
  });

  return Joi.validate(order, joiSchema);
};

const Order = mongoose.model('Order', orderSchema);

module.exports = { Order, validate };
