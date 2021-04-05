const Room = require('../models/Room');
const User = require('../models/User');
const Data = require('../models/Data');

const create = async (roomData, userId) => {
    let user = await User.findById(userId);
    let bkroom = new Data({ ...roomData, owner: userId });

    user.rooms.push(bkroom);
    await user.save();
    return bkroom.save();
}



const getAll = async (userId) => {
    let roomsId = [];
    let userBookedRooms = [];
    const userRooms = await User.findById(userId, async (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(data.rooms);
            roomsId = data.rooms;
        }
    })

    roomsId.forEach(async (x) => {
        try {
            const bookedRoom = await Data.findById(x);
            // console.log(bookedRoom);
            await userBookedRooms.push(bookedRoom);
        } catch (error) {
            console.log(err);
        }
    });


    

    return userBookedRooms;


}

module.exports = {
    create,
    getAll,
}