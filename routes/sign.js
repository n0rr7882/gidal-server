const router = require('express').Router();
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');

const User = require('../database/models/User');

router.post('/', async (req, res) => {

    try {
        const user = (await User.login(req.body.username, req.body.password))[0];
        if (!user) {
            throw new Error('이메일 혹은 암호가 일치하지 않습니다.');
        }
        const token = jwt.sign({ id: user._id }, constants.SALT);
        res.status(200).send({
            status: true,
            message: '로그인 완료',
            token: token
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
            throw new Error('로그인 해주세요!');
        }
        const user = await User.findById(req.user.id);
        if (!user) {
            throw new Error('존재하지 않는 계정');
        }
        res.status(200).send({
            success: true,
            message: '불러오기 완료',
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