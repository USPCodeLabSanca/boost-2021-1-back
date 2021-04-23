const mongoose = require('mongoose')

const scheduleSchema = mongoose.Schema({
    title: String,
    description: String,
    type: String,
    date: Date,
    users: Array
})

module.exports = mongoose.model('Schedule', scheduleSchema)