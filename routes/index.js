const express = require("express");
const homeRouter = require("./home");
const tourismRouter=require("./tourism")
const fitnessRouter=require("./fitness")
const tollywoodRouter=require("./fitness")
const mainrouter = express.Router();

mainrouter.use("/home", homeRouter);
mainrouter.use("/tourism", tourismRouter);
mainrouter.use("/fitness", fitnessRouter);
mainrouter.use("/tollywood", tollywoodRouter);


module.exports = mainrouter;