const UserRouter = require('./user-route')
const MovieRouter = require('./movie-route')

const express = require('express')
const router = express()

router.use('/user', UserRouter)
router.use('/movie', MovieRouter)

module.exports = router