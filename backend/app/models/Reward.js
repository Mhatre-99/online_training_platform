const mongoose = require("mongoose");
const { Schema } = mongoose;

const RewardSchema = new Schema({
    user_id: Number,
    rewards: Number
}, { versionKey: false });

const Reward = mongoose.model("Reward", RewardSchema);

module.exports = Reward;

