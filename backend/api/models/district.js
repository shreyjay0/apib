var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const districtSchema = new Schema({
    city: {
        type: String,
        trim: true,
        required: true,
    },
    state: {
        type: String,
        trim: true,
        required: true,
    }
});
module.exports = mongoose.model('District', districtSchema);