const router = require('express').Router();

const Book = require('../services/bookService');

router.post('/booking', async (req, res) => {
    try {
        const room = await Book.create(req.body, req.body.userId);

        res.status(201).json({
            message: 'Room is booked'
        });

    } catch (error) {
        //TODO: send error message
        console.log(error);
    }
});

router.post('/history', async (req, res) => {
    // console.log(req.body);
    try{
        const bookedRooms = await Book.getAll(req.body.user);
        console.log({ rooms: bookedRooms });
        res.status(201).json({ rooms: bookedRooms })
    }catch(error){
        console.log(error);
    }

});

router.post('/history/delete', async (req,res) => {

    try{
        const deleteBookedRoom = await Book.deleteRoom(req.body.roomId,req.body.userId);
        console.log(deleteBookedRoom);
        res.status(201).json(deleteBookedRoom);
    }catch(error){
        console.log(error);
    }
});

router.post('/history/edit' , async (req,res) => {
    try{
        console.log(req.body);
        const roomData = await Book.getRoomData(req.body.roomId)
        res.status(201).json({editRoom: roomData})
    }catch(error){
        console.log(error);
    }
})

router.post('/history/edit/update', async (req, res) =>{
    try{
        const updatedRoom = await Book.update(req.body.roomId, req.body.roomData)
        res.status(201).json(updatedRoom);
    }catch(err){
        console.log(err);
    }
});

module.exports = router;