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
            roomsId = data.rooms;
        }
    })

     
    for (const room of roomsId) {
        try {
            const bookedRoom = await Data.findById(room);
            await userBookedRooms.push(bookedRoom);
        } catch (error) {
            console.log(err);
        }
    }
    return userBookedRooms;
}
const deleteRoom = async (roomId, userId) => {
    let roomsId = [];
    try {
        const userRooms = await User.findById(userId, async (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data.rooms);
                roomsId = data.rooms;
            }
        })
        const room = await Data.findByIdAndDelete(roomId);
        roomsId.pop(roomId);
        let user = await User.findById(userId);
        user.rooms = roomsId;
        await user.save();
        return { message: `Room is deleted` }
    } catch (error) {
        return { message: `Room doesn\'t exist!` }
    }
}

const getRoomData = async (roomId) => {
    try {
        const roomData = await Data.findById(roomId);
        return roomData;
    } catch (err) {
        console.log(err);
    }
}

const update = async (roomId, roomData) => {
    try{
        await Data.findByIdAndUpdate({_id: roomId}, roomData)
        return { message: `Room is updated successully!`}
    }catch(err){
        console.log(err);
    }
}


module.exports = {
    create,
    getAll,
    deleteRoom,
    getRoomData,
    update,
}