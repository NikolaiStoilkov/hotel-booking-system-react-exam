const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    checkIn: {
        type: String,
        required: true,
    },
    stayingFrom: {
        type: Number,
        required: true,
        maxlength: 50,
    },
    roomImg: {
        type: String,
        required: true,
        validate: /^https?/,
    },
    typeOfRoom: {
        type: String,
        required: true,

    },
    adults: {
        type: Number,
        required: true,
        min: 1,
        max: 4,
    },
    childrens: {
        type: Number,
        required: true,
        max: 4,
    },
    phoneNumber: {
        type: Number,
        required: true,
        maxlength: 10,
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
    }
});

module.exports = mongoose.model('Data', dataSchema);
