const express = require('express');
const clientsController = require('../controllers/clients');
const validationMiddleware = require('../middlewares/validation');
const { validate: validateClient } = require('../models/client');

const router = express.Router();

router.get('/', clientsController.getClients);
router.get('/:id', clientsController.getClient);
router.post('/', validationMiddleware(validateClient), clientsController.createClient);

module.exports = router;
