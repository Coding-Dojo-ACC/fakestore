const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')

// const productRouter = require('../products/productRouter')

const server = express()

server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())

// server.use('/api/characters', productRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Server is running'})
})

server.use((err, req, res, next) => {
    res.status(err.code).json(err)
})

module.exports = server