const TransactionService = require('../services/TransactionService')

class TransactionController {
    async create(req, res, next) {
        try {
            const data = req.body

            await TransactionService.create(data);

            return res.json('ok');
        } catch (e) {
            next(e);
        }
    }

    async accept(req, res, next) {
        try {
            const transaction_id = req.params.transaction_id

            const rs = await TransactionService.accept(transaction_id)

            return res.json(rs)
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new TransactionController();