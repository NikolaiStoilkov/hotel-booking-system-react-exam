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

    const userBookedRooms = User.findById(userId,function(err,data){
        if(err){
            console.log(err);
        }else{
            console.log(data);
        }
    });
}

module.exports = {
    create,
    getAll,
}