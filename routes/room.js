const router = require('express').Router();
const jwt = require('jsonwebtoken');
const constants = require('../config/constants');
const calcDistance = require('../tools/distance');

const User = require('../database/models/User');
const Room = require('../database/models/Room');

router.post('/', async (req, res) => {

    try {
        if (!req.user) {
            throw new Error('로그인 해주세요.');
        }
        const data = req.body;
        if (!data.longitude || !data.latitude) {
            throw new Error('need body.longitude & body.latitude');
        }
        const newRoom = await Room.create({ users: [], spot: data });
        newRoom.users.push(req.user.id);
        const room = await newRoom.save();
        res.status(200).send({
            success: true,
            message: '룸 생성 완료',
            room: room
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }

});

router.put('/join/:id', async (req, res) => {

    try {
        if (!req.user) {
            throw new Error('로그인 해주세요.');
        }
        const target = await Room.findById(req.params.id);
        if (!target.users.includes(req.user.id)) {
            target.users.push(req.user.id);
        }
        await target.save();
        res.status(200).send({
            success: true,
            message: '참여 완료'
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
        const selected = (await Room.find().where('users', req.user.id).populate('users'));
        const rooms = selected.map(room => {
            const roomObj = room.toObject();
            roomObj.users = room.users.map(user => {
                const userObj = user.toObject();
                userObj.distance = calcDistance(user.lastLocation, room.spot);
                return userObj;
            });
            return roomObj;
        });
        res.status(200).send({
            success: true,
            message: '로드 완료',
            rooms: rooms
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }

});

router.delete('/:id', async (req, res) => {

    try {
        await Room.remove(req.params.id);
        res.status(200).send({
            success: true,
            message: '룸 삭제 완료'
        });

    } catch (err) {
        res.status(400).send({
            success: false,
            message: err.message
        });
    }

});

module.exports = router;