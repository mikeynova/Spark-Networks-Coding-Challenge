const express = require('express')
const controllers = require('../controllers/summoner-ctrl')

const Router = new express.Router()

for (const route in controllers) {
  if (Object.prototype.hasOwnProperty.call(controllers, route)) {
    Router.route(route)
      .get(controllers[route].get)
  }
}

module.exports = Router
