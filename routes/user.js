const express = require("express")
const router = express.Router()
const userController = require('../controllers/user')

router.get('/user', userController.getUsers)
router.get('/user/:id', userController.getUser)
router.get('/user/:id/schedules', userController.getInterviewsByUser)
router.post('/user', userController.createNewUser)



module.exports = router