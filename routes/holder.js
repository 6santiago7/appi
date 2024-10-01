const express = require('express');
const router = express.Router();
const holderController = require('../controllers/holder');


router.post('/', holderController.createHolder);


router.put('/:id', holderController.updateHolder);


router.get('/', holderController.getAllHolders);


router.get('/:id', holderController.getHolderById);


router.put('/activate/:id', holderController.activateHolder);


router.put('/unactivate/:id', holderController.deactivateHolder);

module.exports = router;
