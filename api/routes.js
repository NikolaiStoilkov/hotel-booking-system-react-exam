const router = require('express').Router();

const authController = require('./controllers/authController')
const bookingRouter = require('./controllers/bookingController')

router.use('/auth', authController);
router.use('/profile', bookingRouter);

module.exports = router;
