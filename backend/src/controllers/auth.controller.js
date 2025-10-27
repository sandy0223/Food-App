const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
    const { fullName, email, password } = req.body;

    const isAlreadyExist = await userModel.findOne({
        email
    });

    if (isAlreadyExist) {
        return res.status(400).json({ message: "User already exists!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    });

    const token = jwt.sign({ id: user._id }, '0aa846e9699c61294244f687bee8167c');
    res.cookie('token', token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            id: user._id,
            fullName: user.fullName,
            email: user.email
        }
    });
}

async function loginUser(req, res) {
    
}

module.exports = {
    registerUser,
    loginUser
}