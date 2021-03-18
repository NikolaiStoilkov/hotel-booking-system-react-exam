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
    let token;
    let user;
    let isLogged;
    try {
        token = await Auth.Login({ username, password });
        if (token === null) {
            throw new Error('Wrong password or username!')
        } else {
            user = await Auth.getUserInfo({ username })
            console.log(JSON.stringify(user));
            isLogged = true;
            res.status(200).json({
                isLogged,
                _id: user._id,
                username: user.username,
                token: token,
            })
        }
    } catch (error) {
        //TODO: send error message
        console.log(error);
    }
})

module.exports = router;