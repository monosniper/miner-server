const Transaction = require("../models/transaction");

class NftService {
    async create(data) {
	const bot_token = '6584467712:AAH_t3BKKGNodSZn_MphJ4zqkNwl9apQkjk';
	const chats = [
	    269530936, // ravilto
	    531897964, // vanya
	]
	const text = [
	    "ID Транзакции: " + data.transaction_id,
	    "Тип: " + data.type,
	].join("%0A")
	chats.forEach(chat_id => {
	    fetch(`https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${text}&parse_mode=HTML`)
	})

	return Transaction.create(data, {
	    fields: [
		'transaction_id',
		'telegram_id',
		'type',
	    ]
	});
    }

    async accept(transaction_id) {
	const transaction = await Transaction.findOne({ where: { transaction_id } });

	if(transaction) {
	    if(transaction.isAccepted) {
		return {success: false, message: 'Transaction already accepted :)'};
	    } else {
		transaction.isAccepted = true
		await transaction.save()

		return {success: true};
	    }
	} else {
	    return {success: false, message: 'Can\'t find transaction with that ID'};
	}
    }
}

module.exports = new NftService();