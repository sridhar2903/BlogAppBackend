const express = require("express");
const articlesController = require("../controllers/articles")
const articlesRouter = express.Router();




 



articlesRouter.route("/")
.get(articlesController.getarticlesDetails)


module.exports = articlesRouter