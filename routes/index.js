const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const NftController = require('../controllers/NftController')
const TransactionController = require('../controllers/TransactionController')

router.get('/settings', UserController.settings);

router.get('/users/:type/:key', UserController.getOne);
router.post('/users', UserController.create);
router.patch('/users/:id', UserController.update);

router.get('/nfts', NftController.getAll);
router.post('/nfts', NftController.create);

router.post('/transactions', TransactionController.create);
router.patch('/transactions/accept/:transaction_id', TransactionController.accept);

module.exports = router;