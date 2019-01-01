const Client = require('../models/client');
const Order = require('../models/order');

const getOrders = async (req, res, next) => {
  const orders = await Order.find();

  if (!orders) return res.status(404).send({ message: 'Therae are no orders in the database.' });

  res.send(orders);
};

const getOrder = async (req, res, next) => {
  const { id } = req.params;
  const order = await Order.findById(id).populate('clientId');

  if (!order)
    return res
      .status(404)
      .send({ message: 'Therae are no order with the given id in the database.' });

  res.send(order);
};

const createOrder = async (req, res, next) => {
  const { clientId, amount } = req.body;

  const newOrder = new Order({ clientId, amount });

  await newOrder.save();

  if (!newOrder) return res.status(500).send({ message: 'Something went wrong... Try again.' });

  res.status(201).send(newOrder);
};

const updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const { clientId, amount } = req.body;

  const order = await Order.findByIdAndUpdate(id, { clientId, amount }, { new: true });

  if (!order)
    return res
      .status(404)
      .send({ message: 'Therae are no order with the given id in the database.' });

  res.send(order);
};

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
};
