const router = require('express').Router();
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

const User = require('../database/models/User');

router.post('/', async (req, res) => {
    try {
        if (!req.user) {
            throw new Error('로그인 해주세요.');
        }
        const location = { longitude: req.body.longitude, latitude: req.body.latitude };
        const target = await User.findById(req.user.id);
        if (!target) {
            throw new Error('존재하지 않는 계정');
        }
        target.lastLocation = location;
        const user = target.save();
        res.status(200).send({
            success: true,
            message: '업데이트 완료',
            user: user
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }
});

router.get('/', async (req, res) => {
    try {
        if (!req.user) {
            throw new Error('로그인 해주세요.');
        }
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;