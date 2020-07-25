LocalStrategy = require('passport-local-mongoose'); //This is required to allow passport implementation on each user
var mongoose = require('mongoose');
const saltRounds = 11;
var Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    pass: {
        type: String,
        trim: true,
        required: true
    }
});
UserSchema.pre('save', function (next) {
    this.pass = bcrypt.hashSync(this.pass, saltRounds);
    next();
});
userSchema.plugin(LocalStrategy); //This plugs the LocalStrategy to each user
module.exports = mongoose.model('User', userSchema);