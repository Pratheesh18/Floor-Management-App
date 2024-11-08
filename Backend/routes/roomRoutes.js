const express = require('express');
const roomController = require('../controllers/roomController');

const router = express.Router();


router.post('/',roomController.createRoom);
router.put('/:id',roomController.updateRoom);
router.delete('/:id',roomController.deleteRoom);
router.get('/',roomController.getRooms);

module.exports = router;