const Room = require('../models/Room');
const User = require('../models/User');

const create = async (roomData) => {
    const {
        checkIn,
        stayingFrom,
        typeOfRoom,
        adults,
        childrens,
        phoneNumber,
        email,
        roomImg,
        _id } = roomData;

    let owner = _id;
    let user = await User.findById(_id);
    // console.log(user);/
    let room = new Room({
        checkIn,
        stayingFrom,
        roomImg,
        typeOfRoom,
        adults,
        childrens,
        phoneNumber,
        email,
        owner,
    });

    return await room.save();
}

function getAll(userId) {
    let allRooms = Room.findById(userId)
        .populate('owner')
        .lean();
    return allRooms;
}

module.exports = {
    create,
    getAll,
}