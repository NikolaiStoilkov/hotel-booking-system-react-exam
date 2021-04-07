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
    try{
        const bookedRooms = await Book.getAll(req.body.user);
        res.status(201).json({ rooms: bookedRooms })
    }catch(error){
        console.log(error);
    }

});

router.post('/history/delete', async (req,res) => {


    console.log(req.body.roomId);
    console.log(req.body.userId);
    try{
        const deleteBookedRoom = await Book.deleteRoom(req.body.roomId,req.body.userId);
        console.log(deleteBookedRoom);
        res.status(201).json(deleteBookedRoom);
    }catch(error){
        console.log(error);
    }
})

module.exports = router;