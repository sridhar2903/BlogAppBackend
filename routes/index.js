const express = require("express");
const homeRouter = require("./home");
const tourismRouter=require("./tourism")
const fitnessRouter=require("./fitness")
const tollywoodRouter=require("./tollywood")
const technologyRouter=require("./technology")
const foodRouter=require("./food")
const articleRouter=require("./articles")
const mainrouter = express.Router();

mainrouter.use("/home", homeRouter);
mainrouter.use("/tourism", tourismRouter);
mainrouter.use("/fitness", fitnessRouter);
mainrouter.use("/tollywood", tollywoodRouter);
mainrouter.use("/technology", technologyRouter);
mainrouter.use("/food", foodRouter);
mainrouter.use("/articles", articleRouter);


module.exports = mainrouter;