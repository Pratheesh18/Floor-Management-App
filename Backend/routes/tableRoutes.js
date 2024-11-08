const express = require('express');
const tableController = require('../controllers/tableController');


const router = express.Router();

router.post('/',tableController.createTable);
router.put('/:id',tableController.updateTable);
router.delete('/:id',tableController.deleteTable);
router.put('/:id/toggle-status',tableController.toggleTableStatus);
router.get('/',tableController.getTables);

module.exports = router;