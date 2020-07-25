var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const stateSchema = new Schema({
    state: {
        type: String,
        trim: true,
        required: true,
    }
});
module.exports = mongoose.model('State', stateSchema);