const router = require('express').Router();

const Auth = require('../services/authService')
const { COOKIE_NAME } = require('../config/index');


router.post('/register', async (req, res) => {
    const { username, password, rePassword } = req.body;


    //try if password and rePassword match

    //register user
    let user = await Auth.Register({ username, password });

    res.json({ _id: user._id })
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        let token = await Auth.Login({ username, password });

        console.log(token);
        
        res.cookie(COOKIE_NAME, token);

    } catch (error) {
        //TODO: send error message
        console.log(error);
    }
})

module.exports = router;