const UserService = require('../services/UserService')

class UserController {
    async getOne(req, res, next) {
        try {
            const user = await UserService.getOne(req.params.key, req.params.type);
            return res.json(user);
        } catch (e) {
            console.log(e);
            next(e);
        }
    }

    async create(req, res, next) {
        try {
            const user = await UserService.create(req.body);

            return res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res,next) {
        try {
            await UserService.update(req.params.id, req.body)

            return res.json('ok');
        } catch (e) {
            next(e);
        }
    }

    async settings(req, res,next) {
        try {
            const settings = await UserService.getSettings()

            const data = {}

            settings.forEach(({key, value}) => {
                data[key] = value
            })

            return res.json(data);
        } catch (e) {
            next(e);
        }
    }

    async saveSettings(req, res,next) {
        try {
            await UserService.saveSettings(req.body)

            return res.json('ok');
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();