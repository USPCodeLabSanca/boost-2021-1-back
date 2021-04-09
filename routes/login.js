const express = require("express")
const router = express.Router()
const loginController = require('../controllers/login')

router.post('/auth/login', loginController.enterLogin)


module.exports = router