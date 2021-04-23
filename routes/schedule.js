const express = require("express")
const router = express.Router()
const userController = require('../controllers/schedule')

router.post('/schedule', userController.createInterview);
router.get('/schedule', userController.getInterviews);
router.get('/schedule/:id', userController.getInterviewByID);


module.exports = router