const express = require('express');

const ordersController = require('../controllers/orders');
const validationMiddleware = require('../middlewares/validation');
const { validate: validateOrder } = require('../models/order');

const router = express.Router();

router.get('/', ordersController.getOrders);
router.get('/:id', ordersController.getOrder);
router.post('/', validationMiddleware(validateOrder), ordersController.createOrder);

module.exports = router;
