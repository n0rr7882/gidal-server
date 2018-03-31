const router = require('express').Router();
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

const User = require('../database/models/User');

router.post('/', async (req, res) => {

    try {
        const data = req.body;
        data.lastLocation = { latitude: 37.532600, longitude: 127.024612 };
        const user = await User.create(data);
        res.status(200).send({
            status: true,
            message: '계정생성 완료',
            user: user
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }

});

router.get('/:id', async (req, res) => {

    try {
        if (!req.params || !req.params.id) {
            throw new Error('need params._id');
        }
        const user = await User.findById(req.params.id);
        if (!user) {
            throw new Error('존재하지 않는 계정');
        }
        res.status(200).send({
            success: true,
            message: '로드 완료',
            user: user
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }

});

module.exports = router;