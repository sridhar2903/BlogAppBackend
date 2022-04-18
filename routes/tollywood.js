const express = require("express");
const tollywoodController = require("../controllers/tollywood")
const tollywoodRouter = express.Router();




 



tollywoodRouter.route("/")
.get(tollywoodController.gettollywoodDetails)


module.exports = tollywoodRouter