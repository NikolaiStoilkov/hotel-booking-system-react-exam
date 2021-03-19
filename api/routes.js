const router = require('express').Router();

const authController = require('./controllers/authController')
const bookingRouter = requre('./controllers/bookingController')

router.use('/auth', authController);
router.use('/profile', bookingRouter);

module.exports = router;
