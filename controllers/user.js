const userModel = require('../models/user')

module.exports.createNewUser =  async (req, res) => {

    const { email, username } = req.body

    const user = {
        "username": username,
        "email": email
    }

    const newUser = new userModel(user)

    const userCreated = await newUser.save()

    return res.status(200).json(userCreated)

}

module.exports.getUsers = async (req, res) => {

    const users = await userModel.find()

    return res.status(200).json(users)

}