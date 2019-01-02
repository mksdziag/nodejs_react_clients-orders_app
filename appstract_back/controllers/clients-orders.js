const { Order } = require('../models/order');
const mongoose = require('mongoose');

const getAggregateData = async (req, res, next) => {
  const aggregatorOpts = [
    {
      $group: {
        _id: '$clientId',
        total: { $sum: '$amount' },
        ordersCount: { $sum: 1 },
      },
    },
    { $sort: { total: -1 } },
    {
      $lookup: {
        from: 'clients',
        localField: '_id',
        foreignField: '_id',
        as: 'clientDetails',
      },
    },
    {
      $unwind: {
        path: '$clientDetails',
        preserveNullAndEmptyArrays: true,
      },
    },
  ];

  const orders = await Order.aggregate(aggregatorOpts);

  if (!orders) return res.status(404).send({ message: 'Therae are no orders in the database.' });

  res.send(orders);
};

const getAggregateUserData = async (req, res, next) => {
  const { id } = req.params;
  const objId = mongoose.Types.ObjectId(id);

  const aggregatorOpts = [
    { $match: { clientId: objId } },
    {
      $lookup: {
        from: 'clients',
        localField: 'clientId',
        foreignField: '_id',
        as: 'clientDetails',
      },
    },
    { $sort: { _id: -1 } },
    {
      $unwind: {
        path: '$clientDetails',
        preserveNullAndEmptyArrays: true,
      },
    },
  ];

  const orders = await Order.aggregate(aggregatorOpts);

  if (!orders) return res.status(404).send({ message: 'Therae are no orders in the database.' });

  res.send(orders);
};

module.exports = {
  getAggregateData,
  getAggregateUserData,
};
