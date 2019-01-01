const express = require('express');
const clientsController = require('../controllers/clients');

const router = express.Router();

router.get('/', clientsController.getClients);
router.get('/:id', clientsController.getClient);
router.post('/', clientsController.createClient);
router.patch('/:id', clientsController.updateClient);

module.exports = router;
