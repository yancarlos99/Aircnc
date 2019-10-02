const express = require("express");
const SessionController = require("./app/controllers/SessionController");
const SpotController = require("./app/controllers/SpotController");

const routes = express.Router();

routes.post("/sessions", SessionController.store);
routes.post("/spots", SpotController.store);

module.exports = routes;
