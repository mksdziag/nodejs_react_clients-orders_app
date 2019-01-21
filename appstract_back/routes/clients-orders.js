const express = require('express');

const clients_ordersController = require('../controllers/clients-orders');

const router = express.Router();

router.get('/', clients_ordersController.getAggregateData);
router.get('/:id', clients_ordersController.getAggregateUserData);

module.exports = router;
