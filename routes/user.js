const express = require("express")
const router = express.Router()
const userController = require('../controllers/user')

router.get('/user', userController.getUsers)
router.post('/user', userController.createNewUser)


module.exports = router