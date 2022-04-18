const express = require("express");
const homeRouter = require("./home");
const tourismRouter=require("./tourism")
const mainrouter = express.Router();

mainrouter.use("/home", homeRouter);
mainrouter.use("/tourism", tourismRouter);


module.exports = mainrouter;