const express = require('express');
const clientsController = require('../controllers/clients');

const router = express.Router();

router.get('/', clientsController.getClients);
router.get('/:id', clientsController.getClient);
router.post('/', clientsController.createClient);

module.exports = router;
