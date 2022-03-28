const express = require('express')
const cors = require('cors')
const db = require('./db')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))

//routes
app.get('/', (req, res) => res.send('Hello!'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
