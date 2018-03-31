const mongoose = require('mongoose');
const password = require('../../tools/password');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    realname: { type: String, required: true },
    password: { type: String, required: true },
    lastLocation: {
        longitude: Number,
        latitude: Number
    }
}, { timestamps: true });

function encryptPassword(next) {
    if (!this.isModified('password')) return next();
    this.password = password(this.password);
    return next();
}

function removePassword(next) {
    this.select('-password -__v');
    return next();
}

userSchema.pre('save', encryptPassword);
userSchema.pre('find', removePassword);
userSchema.pre('findOne', removePassword);
userSchema.pre('findById', removePassword);

userSchema.methods.comparePassword = function (plainPassword) {
    if (this.password === password(plainPassword)) return true;
    return false;
};

userSchema.statics.login = function (username, plainPassword) {
    return this.where('username', username).where('password', password(plainPassword));
}

module.exports = mongoose.model('user', userSchema);