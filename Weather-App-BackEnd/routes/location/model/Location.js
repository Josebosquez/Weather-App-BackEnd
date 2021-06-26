const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    description: {
        type: String,
    },
    temperature: {
        type: Number,
    }
});

module.exports = mongoose.model('location', locationSchema)