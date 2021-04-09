const mongoose = require('mongoose')


const userSchema =  mongoose.Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    completed_questions: Array
})

module.exports =  mongoose.model('User', userSchema)
