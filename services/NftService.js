const Nft = require("../models/nft");

class NftService {
    async getAll() {
	return Nft.findAll();
    }

    async create(data) {
	return Nft.create(data, {
	    fields: [
		'name',
		'price',
	    ]
	});
    }
}

module.exports = new NftService();