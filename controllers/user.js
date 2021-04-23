const userModel = require('../models/user')
const scheduleModel = require('../models/schedule')
const bcrypt = require('bcrypt')

module.exports.createNewUser =  async (req, res) => {

    const { username, password, name, email, completed_questions } = req.body

    const salt = await bcrypt.genSalt(10)

    const hashedpass = await bcrypt.hash(password, salt)

    const user = {
        "username": username,
        "password": hashedpass,
        "name": name,
        "email": email,
        "completed_questions": completed_questions
    }

    const newUser = new userModel(user)

    const userCreated = await newUser.save()

    return res.status(200).json(userCreated)

}

module.exports.getUsers = async (req, res) => {

    const users = await userModel.find()

    return res.status(200).json(users)

}

module.exports.getUser = async (req, res) => {

    const id = req.params.id;

    const todo = await userModel.findById(id).exec();

    return res.status(200).json(todo);

}

//Retorna todas as mock interviews marcadas pelo usuário
module.exports.getInterviewsByUser = async (req, res) => {
    const userid = req.params.id

    const interviews = await scheduleModel.find({ users : { $all : [userid] }})
    
    return res.status(200).json(interviews)
}