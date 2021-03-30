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
    });
    user.rooms.push(room);

    return await room.save();
}

module.exports = {
    create,
}