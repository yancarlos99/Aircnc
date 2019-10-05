const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/upload");

const SessionController = require("./app/controllers/SessionController");
const SpotController = require("./app/controllers/SpotController");
const DashboardController = require("./app/controllers/DashboardController");
const BookingController = require("./app/controllers/BookingController");
const ApprovalController = require("./app/controllers/ApprovalController");
const RejectionController = require("./app/controllers/RejectionController");

const routes = express.Router();
const upload = multer(multerConfig);

routes.post("/sessions", SessionController.store);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.post("/bookings/:booking_id/approvals", ApprovalController.store);
routes.post("/bookings/:booking_id/rejections", RejectionController.store);

module.exports = routes;
