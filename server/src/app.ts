const express= require("express")
const  app = express()
//connect DB
require("./database/connection")

const port = process.env.PORT || 8080
app.listen(port,()=>console.log("rungyyyyyeg"))

