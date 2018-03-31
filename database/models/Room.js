const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    users: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'user' }],
    spot: {
        longitude: { type: Number, required: true },
        latitude: { type: Number, required: true }
    }
}, { timestamps: true });

module.exports = mongoose.model('room', roomSchema);