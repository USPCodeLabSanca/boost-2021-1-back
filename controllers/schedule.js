const scheduleModel = require('../models/schedule')
const user = require('../models/user')

//Cria uma mock interview
module.exports.createInterview = async (req, res) => {
    const {title, description, type, date} = req.body

    const interview = {
        "title": title,
        "description": description,
        "type": type,
        "date": date
    }

    const newInterview = new scheduleModel(interview)

    const interviewCreated = await newInterview.save()

    return res.status(200).json(interviewCreated)
}

//Retorna uma mock interview
module.exports.getInterviewByID = async (req, res) => {

    const id = req.params.id;

    const interview = await scheduleModel.findById(id)

    return res.status(200).json(interview)
}

//Retorna todas as mock interviews marcadas pelo usuário
module.exports.getInterview = async (req, res) => {

    const interview = await scheduleModel.find()

    return res.status(200).json(interview)
}

//Atualiza uma schedule de uma mock interview

//Deleta uma schedule de uma mock interview