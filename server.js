const express = require("express");
const cors = require("cors");
const mainrouter = require("./routes");
const server = express();  



server.use(cors());
server.use("/api/v1", mainrouter);

server.listen(process.env.PORT || 6000, ()=>{
    console.log("Application has started successfully");
})