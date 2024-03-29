const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProcessedModulesSchema = new Schema({
    user_id: { type: String, unique: true }, // Ensure unique user_id
    processed_modules_id: [String] 
}, { versionKey: false });

const ProcessedModules = mongoose.model('ProcessedModules', ProcessedModulesSchema);

module.exports = ProcessedModules;
