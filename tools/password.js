const crypto = require('crypto');

module.exports = function password(password) {
    return crypto.createHash("sha512").update(password).digest('base64');
}