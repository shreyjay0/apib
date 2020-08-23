var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const childSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    sex: {
        type: String,
        trim: true,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
        trim: true,
    },
    mothername: {
        type: String,
        trim: true,
        required: true,
    },
    fathername: {
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

module.exports = mongoose.model('Child', childSchema);
