const express = require('express')
const { sendMail } = require('./src/controllers/mail')

const routes = express()

routes.post('/send', sendMail)

module.exports = routes;