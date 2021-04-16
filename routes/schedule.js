const express = require("express")
const router = express.Router()
const userController = require('../controllers/schedule')

router.post('/schedule', userController.createInterview)
router.get('/schedule/:id', userController.getInterviewByID)
router.get('/schedule', userController.getInterview)


module.exports = router