const userModel = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports.enterLogin = async (req, res) => {
    const {email, password} = req.body

    const user = await userModel.findOne({"email": email})

    if(!(await bcrypt.compare(password, user.password) )){
        return res.status(400).json('Senha errada')
    }

    const token = await jwt.sign({user}, 'secret')
   
    return res.status(200).json(token) 
}

