const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: String,
    status: Number,
    description: String
})

module.exports = mongoose.model("Task", taskSchema);