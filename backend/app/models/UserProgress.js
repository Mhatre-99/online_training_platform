const mongoose = require("mongoose");

const UserProgressSchema = new Schema({
    user_id: Number,
    module_id: Number,
    progress: Number
});

module.exports = mongoose.model;

