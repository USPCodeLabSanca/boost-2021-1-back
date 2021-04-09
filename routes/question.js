const express = require("express")
const router = express.Router()
const userController = require('../controllers/question')

router.post('/questions', userController.createQuestion)
router.get('/questions', userController.getQuestions)
router.get('/questions/:type', userController.getQuestionsByType)

module.exports = router
