const express = require("express");
const foodController = require("../controllers/food")
const foodRouter = express.Router();




 



foodRouter.route("/")
.get(foodController.getfoodDetails)


module.exports = foodRouter