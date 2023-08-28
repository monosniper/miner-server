const User = require("../models/user");
const Nft = require('../models/nft')

class UserService {
    async getOne(key, type) {
	return User.findOne({ where: {
	    key, type
	}, include: Nft });
    }

    async create(data) {
	return await User.create(data, {
	    fields: [
		'key',
		'type',
	    ]
	});
    }

    async update(id, data) {
	if (data.nfts) {
	    const user = await User.findOne({ where: { id } })
	    await user.addNfts(data.nfts)
	}

	return await User.update(data, {
	    where: { id },
	    fields: [
		'balance',
		'balance_nft',
	    ]
	});
    }
}

module.exports = new UserService();