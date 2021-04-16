const mongoose = require('mongoose')

const scheduleSchema = mongoose.Schema({
    title: String,
    description: String,
    type: String,
    date: Date,
    users: [  {type: mongoose.Schema.Types.ObjectId , ref: 'User'} ]
})

module.exports = mongoose.model('Schedule', scheduleSchema)