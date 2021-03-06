const express = require('express');
const app = express();
const game = require("../controllers/game.controller");
  
// Create a new Customer
app.post("/games", game.create);

module.exports = app