const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const server = express()

mongoose.connect('mongodb+srv://tindev:tindev@tindev-tjh6a.mongodb.net/tindev?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)

