const jwt = require('jsonwebtoken');

const constants = require('../config/constants');

const middleware = (req, res, next) => {
    if (req.headers.authorization) {
        jwt.verify(req.headers.authorization, constants.SALT, (err, decoded) => {
            if (!err && decoded) {
                req.user = decoded;
            }
        });
    }
    next();
}

module.exports = middleware;