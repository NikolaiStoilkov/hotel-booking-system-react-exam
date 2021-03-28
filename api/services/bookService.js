const Room = require('../models/Room');

const create = async(roomData) => {
    console.log(roomData)
    const newRoom = new Room(roomData);
    
    return await newRoom.save(function(err){
        
    });
}

module.exports = {
    create,
}