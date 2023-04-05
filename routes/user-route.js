const express = require('express')
const Router = express()
const port = 3000
const UserController = require('../controllers/userController')

Router.post('/', UserController.login)


module.exports = Router