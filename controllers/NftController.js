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
            const data = req.body

            const nft = await NftService.create(data);

            await UploadService.save(data.image, 'nfts', nft.id)
            nft.image = nft.id+'.webp'
            await nft.save()

            return res.json('ok');
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new NftController();