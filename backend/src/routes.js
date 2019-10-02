const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/upload");

const SessionController = require("./app/controllers/SessionController");
const SpotController = require("./app/controllers/SpotController");

const routes = express.Router();
const upload = multer(multerConfig);

routes.post("/sessions", SessionController.store);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

module.exports = routes;
