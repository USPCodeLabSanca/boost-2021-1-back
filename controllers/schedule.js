const scheduleModel = require('../models/schedule')

//Cria uma mock interview
module.exports.createInterview = async (req, res) => {
    const {title, description, type, date, users} = req.body

    const interview = {
        "title": title,
        "description": description,
        "type": type,
        "date": date,
        "users": users
    }

    const newInterview = new scheduleModel(interview)

    const interviewCreated = await newInterview.save()

    return res.status(200).json(interviewCreated)
}

module.exports.getInterviews = async (req, res) => {
    const interviews = await scheduleModel.find()

    return res.status(200).json(interviews)
}

//Retorna uma mock interview
module.exports.getInterviewByID = async (req, res) => {
    // console.log("oi")

    const id = req.params.id;

    const interview = await scheduleModel.findById(id)

    return res.status(200).json(interview)
}

//Atualiza uma schedule de uma mock interview

//Deleta uma schedule de uma mock interview