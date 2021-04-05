const Room = require('../models/Room');
const User = require('../models/User');
const Data = require('../models/Data');

const create = async (roomData,userId) => {
        let user = await User.findById(userId);
        let bkroom = new Data({...roomData, owner: userId});
        
        user.rooms.push(bkroom);
        await user.save();
        return bkroom.save();
}

function getAll(userId) {
    let userRooms = Room.find({owner: userId}).lean();
    console.log(userRooms);
}

module.exports = {
    create,
    getAll,
}