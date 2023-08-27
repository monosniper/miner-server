const fs = require('fs');

class UploadService {
    async save(file, space, id) {
	const fileName = id+'.webp';
	const path = __dirname + '/../uploads/'+space+'/'+fileName;
	const image = file.replace(/^data:([A-Za-z-+/]+);base64,/, '');

	fs.writeFileSync(path, image,  {encoding: 'base64'});

	return fileName;
    }
}

module.exports = new UploadService();