const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require("./auth/auth-router.js")
const usersRouter = require("./users/users-router")
const equipmentRouter = require("./equipment/equipment-router")
const requestsRouter = require("./requests/requests-router")

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/auth", authRouter)
server.use("/api/users", usersRouter)
server.use("/api/equipment", equipmentRouter)
server.use("/api/requests", requestsRouter)

server.use((err, req, res, next) => {// eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
})

module.exports = server
