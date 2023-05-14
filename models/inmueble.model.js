const {model, Schema } = require('mongoose');

const inmuebleSchema = new Schema({
    floor: Number,
    lettre: String,
    metres: Number,
    bedrooms: Number,
    rent: Boolean,
    landlord_name: String,
    email: String
}, {timestamps: true, versionKey: false});

module.exports = model('estate', inmuebleSchema);