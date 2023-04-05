if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}
const { errorHandler } = require('./middlewares/errorhandler')
const cors = require('cors')
const router = require('./routes/index')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(router)

app.listen(port, () => {
    console.log(`Testing app listening on port ${port}`)
})

app.use(errorHandler)