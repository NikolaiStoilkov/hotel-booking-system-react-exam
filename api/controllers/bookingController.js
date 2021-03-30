const router = require('express').Router();

const Book = require('../services/bookService');

router.post('/booking', async (req,res) => {
    const { 
        checkIn,
        stayingFrom,
        typeOfRoom,
        adults,
        childrens,
        phoneNumber,
        email,
        roomImg,
         _id } = req.body;

    try{
        const room = await Book.create({ 
            checkIn,
            stayingFrom,
            typeOfRoom,
            adults,
            childrens,
            phoneNumber,
            email,
            roomImg,
             _id }); 

             

             res.status(201).json({
                 message: 'Room is booked'
             });

    } catch (error){
        //TODO: send error message
        console.log(error);
    }


})

module.exports = router;