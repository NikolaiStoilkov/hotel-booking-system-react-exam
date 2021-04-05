const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    rooms: [{
        type: mongoose.Types.ObjectId,
        ref: 'Data'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

})

module.exports = mongoose.model('Room', roomSchema);
