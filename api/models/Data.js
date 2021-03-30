const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema();

module.exports = mongoose.model('Data', guestSchema);
