const Order = require('../models/order');

const getOrders = async (req, res, next) => {
  const orders = await Order.find().populate('clientId');

  if (!orders) return res.status(404).send({ message: 'Therae are no orders in the database.' });

  res.send(orders);
};

const getClientOrders = async (req, res, next) => {
  const { clientId } = req.params;
  const orders = await Order.find({ clientId: clientId });

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

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  getClientOrders,
};
