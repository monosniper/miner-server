const User = require("../models/user");

class UserService {
    async getOne(key, type) {
	return User.findOne({ where: {
	    key, type
	} });
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
	return await User.update(data, {
	    where: { id },
	    fields: [
		'balance',
	    ]
	});
    }
}

module.exports = new UserService();