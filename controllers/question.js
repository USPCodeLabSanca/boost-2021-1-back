const questionModel = require('../models/question')
const userModel = require('../models/user')

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

    const type = req.params.type;

    const questions = await questionModel.find({"type": type})

    return res.status(200).json(questions)
}

module.exports.editQuestionByID = async (req, res) => {

    const {userID, id, title, description, type} = req.body;

    const updateInfo = {
        "title" : title, 
        "description": description,
        "type": type
    }

    const editor = await userModel.findById(userID).exec()

    if (editor.toObject().role !== 'admin')
        return res.status(401).send('Usuário não autorizado!')

    const editedQuestion = await questionModel.findByIdAndUpdate(id, updateInfo, options = {new : true, useFindAndModify : false})

    return res.status(200).json(editedQuestion)
}

module.exports.deleteQuestionByID = async (req, res) => {

    const { userID, id } = req.body;

    const editor = await userModel.findById(userID)

    if (editor.toObject().role !== 'admin')
        return res.status(401).send('Usuário não autorizado!')

    const deletedQuestion = await questionModel.findByIdAndDelete(id)

    return res.status(200).json(deletedQuestion)    

}