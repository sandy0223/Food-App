const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect('mongodb://localhost:27017/foodapp')
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Error connecting to MongoDB:', error));
}

module.exports = connectDB;
