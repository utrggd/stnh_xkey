const genId1 = require('cvyz_xid');
const genId2 = require('yhbu_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|tvtaOnjLww|' + genId2()).digest('base64');
}


module.exports = generateKey;
