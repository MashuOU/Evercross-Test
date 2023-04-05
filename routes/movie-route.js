const express = require('express')
const Router = express()
const port = 3000
const movieController = require('../controllers/movieController')

Router.get('/', movieController.fetchAllMovie)


module.exports = Router