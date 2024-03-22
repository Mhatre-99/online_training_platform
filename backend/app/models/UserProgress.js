const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserProgressSchema = new Schema({
    user_id: Number,
    module_id: Number,
    progress: Number
}, { versionKey: false });

const UserProgress = mongoose.model("UserProgress", UserProgressSchema);

module.exports = UserProgress;

