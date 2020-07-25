LocalStrategy = require('passport-local-mongoose'); //This is required to allow passport implementation on each user
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const ChildSchema = new Schema({
    state: {
        type: String,
        trim: true,
        required: true,
    }
});
chilSchema.plugin(LocalStrategy); //This plugs the LocalStrategy to each user
module.exports = mongoose.model('Child', chilSchema);