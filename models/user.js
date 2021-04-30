const mongoose = require('mongoose')


const userSchema =  mongoose.Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    completed_questions: Array,
    role: String,
})

module.exports =  mongoose.model('User', userSchema)
