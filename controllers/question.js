const questionModel = require('../models/questions')

module.exports.createQuestion = async (req, res) => {
    const {title, description, type} = req.body

    const question = {
        "title": title,
        "description": description,
        "type": type
    }

    const newQuestion = new questionModel(question)

    const questionCreated = await newQuestion.save()

    return res.status(200).json(questionCreated)
}

module.exports.getQuestions = async (req, res) => {

    const questions = await questionModel.find()

    return res.status(200).json(questions)
}

module.exports.getQuestionsByType = async (req, res) => {

    const { type } = req.body

    const questions = await questionModel.find({'type': type})

    return res.status(200).json(questions)
}