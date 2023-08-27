const NftService = require('../services/NftService')
const UploadService = require('../services/UploadService')

class NftController {
    async getAll(req, res, next) {
        try {
            const nfts = await NftService.getAll();

            return res.json(nfts);
        } catch (e) {
            next(e);
        }
    }

    async create(req, res, next) {
        try {
            const nft = await NftService.create(req.body);

            if(req.body.image) {
                await UploadService.save(req.body.image, 'nfts', nft.id)
            }

            return res.json('ok');
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new NftController();