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
})

router.post('/history', async (req, res) => {
    try{
        const bookedRooms = await Book.getAll(req.body.user);
        console.log(bookedRooms);
        res.status(201).json({ rooms: bookedRooms })
    }catch(error){
        console.log(error);
    }

})

module.exports = router;