const express = require("express")
const router = express.Router()
const userController = require('../controllers/question')

router.post('/questions', userController.createQuestion)
router.get('/questions', userController.getQuestions)
router.get('/questions/:type', userController.getQuestionsByType)
router.put('/questions', userController.editQuestionByID)
router.delete('/questions', userController.deleteQuestionByID)


module.exports = router
