const User = require("../models/user");
const Setting = require("../models/setting");
const Nft = require('../models/nft')
const KeyGenerate = require("../utils/keyGenerate");
const {set} = require("express/lib/application");

class UserService {
    async getOne(key, type) {
        return User.findOne({
            where: {
                key, type
            }, include: Nft
        });
    }

	async getSettings(key, type) {
		return Setting.findAll();
	}

	async saveSettings(data) {
		Object.entries(data).forEach(({key, value}) => {
			const setting = Setting.findOne({key})
			if(setting) {
				setting.value = value
				setting.save()
			} else {
				Setting.create({key, value})
			}
		})
	}

    async create(data) {
        data.key = KeyGenerate()

        return await User.create(data, {
            fields: [
                'key',
                'type',
                'from_name',
                'premium',
                'isDemo',
            ]
        });
    }

    async update(id, data) {
        if (data.nfts) {
            const user = await User.findOne({where: {id}})
            await user.setNfts(data.nfts)
        }

        return await User.update(data, {
            where: {id},
            fields: [
                'balance',
                'balance_nft',
                'isFirstStart',
                'isDemo',
                'isDemoExpired',
                'experience',
                'status',
            ]
        });
    }
}

module.exports = new UserService();