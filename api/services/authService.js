const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET, COOKIE_NAME } = require('../config/index');
const User = require('../models/User.js')


const Register = async ({ username, password }) => {
    //TODO: check if username exists
    const user = new User({ username, password });

    return await user.save();

}

const Login = async ({ username, password }) => {
    let user = await User.findOne({ username });
    //TODO: USER NOT FOUND
    let isMatch = await bcrypt.compare(password, user.password);
    //TODO: USER PASSWORD DONT MATCH

    if (isMatch) {
        let token = jwt.sign({ _id: user._id, roles: ['user'] }, SECRET);
        return token;
    }else{
        
    }

    return null;
}

const getUserInfo = async ({ username }) => {
    let user = await User.findOne({ username });

    return {
        username: user.username,
        _id: user._id,
    }
}

module.exports = {
    Register,
    Login,
    getUserInfo
}