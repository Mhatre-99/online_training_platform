const mongoose = require("mongoose");
const { Schema } = mongoose;

const ModuleSchema = new Schema({
    _id: String,
    title: String,
    description: String,
    author: Number,
    videos_id: Number,
    quizzes: Number,
    duration: Number,
    is_mandatory: Boolean,
    reward_points: Number
}, { versionKey: false });

const Module = mongoose.model("Module", ModuleSchema);

module.exports = Module;

