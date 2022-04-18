const express = require("express");
const homeRouter = require("./home");
const mainrouter = express.Router();

mainrouter.use("/home", homeRouter);


module.exports = mainrouter;