const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const NftController = require('../controllers/NftController')

router.get('/users/:type/:key', UserController.getOne);
router.post('/users', UserController.create);
router.patch('/users/:id', UserController.update);

router.get('/nfts', NftController.getAll);
router.post('/nfts', NftController.create);

module.exports = router;