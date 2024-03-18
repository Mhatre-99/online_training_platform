const mongoose = require("mongoose");

const VideoSchema = new Schema({
    id: Number,
    drive_url: String,
    description: String
});

module.exports = mongoose.model;

