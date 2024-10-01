const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryController');


router.post('/', entryController.createEntry);


router.get('/holder/:id', entryController.getEntriesByHolder);


router.get('/dia', entryController.getEntriesByDay);


router.get('/fechas', entryController.getEntriesBetweenDates);


router.put('/salida/:id', entryController.registerCheckout);

module.exports = router;
