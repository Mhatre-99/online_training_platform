const mongoose = require("mongoose");

const RewardSchema = new Schema({
    user_id: Number,
    rewards: Number
});

module.exports = mongoose.model;

