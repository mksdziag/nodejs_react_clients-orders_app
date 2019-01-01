const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  amount: {
    type: Number,
    min: 0,
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
