const mongoose = require("mongoose");

const UserSchema = new Schema({
    id: Number,
    name: String,
    email: {
        type: String,
        required: true
    },
    phone_number: String,
    designation: String,
    roles: String,
    password: String,
    birth_date: Date,
    rewards_earned: Number
});

module.exports = mongoose.model;