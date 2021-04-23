const express = require("express")
const router = express.Router()
const userController = require('../controllers/schedule')

router.post('/schedule', userController.createInterview);
router.get('/schedule', userController.getInterviews);
router.get('/schedule/:id', userController.getInterviewByID);
router.put('/schedule/:id', userController.updateSchedule);
router.delete('/schedule/:id', userController.deleteInterview);

module.exports = router