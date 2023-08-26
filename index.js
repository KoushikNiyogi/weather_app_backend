const express = require("express");
const cors = require("cors");
const connection = require("./db");
const UserRoute = require("./Routes/User.route");

const app = express()
app.use(cors({"origin" : "*"}))
app.use(express.json())
app.use("/user", UserRoute)



app.listen(8080,async ()=>{
  try {
    await connection;
    console.log("connected to DB, running at port 8080")
  } catch (error) {
    console.log("There was error ")
  }
})