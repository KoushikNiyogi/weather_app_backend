const jwt = require("jsonwebtoken")
const UserAuth = async (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
      const decode = jwt.verify(token, "weather-app-user");
      if(decode){
        next();
      }else{
        res.status(400).send({"msg" : "Login to continue"})
      }
    }else{
        res.status(400).send({"msg" : "You are not authorized"})
    }
    
}

module.exports = UserAuth