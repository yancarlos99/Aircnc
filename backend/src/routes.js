const express = require("express");

const routes = express.Router();

app.post("/users", (req, res) => {
  return res.json(req.body);
});
