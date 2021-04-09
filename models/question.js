const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    title: String,
    description: String,
    type: String
})

module.exports = mongoose.model('Question', questionSchema)