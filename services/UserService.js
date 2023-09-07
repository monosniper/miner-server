const User = require("../models/user");
const Nft = require('../models/nft')
const KeyGenerate = require("../utils/keyGenerate");

class UserService {
    async getOne(key, type) {
	return User.findOne({ where: {
	    key, type
	}, include: Nft });
    }

    async create(data) {
	data.key = KeyGenerate()

	return await User.create(data, {
	    fields: [
		'type',
		'from_name',
		'premium',
		'isDemo',
	    ]
	});
    }

    async update(id, data) {
	if (data.nfts) {
	    const user = await User.findOne({ where: { id } })
	    await user.setNfts(data.nfts)
	}

	return await User.update(data, {
	    where: { id },
	    fields: [
		'balance',
		'balance_nft',
		'isFirstStart',
		'isDemo',
		'isDemoExpired',
	    ]
	});
    }
}

module.exports = new UserService();