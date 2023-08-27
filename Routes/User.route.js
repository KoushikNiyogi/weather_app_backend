const express = require("express");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const userModel = require("../Models/User.model");
const UserAuth = require("../Middleware/UserAuth");

const UserRoute = express.Router();

UserRoute.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (user) {
            res.status(400).send({ "msg": "User already present. Please Login" })
        } else {
            bcrypt.hash(password, 5, function(err, hash) {
                // Store hash in your password DB.
                if(err){
                    res.status(400).send({ "msg": "User not added. We will get back to you soon" })
                }else{
                    bcrypt.hash(password, 5, async (err, hash) => {
                        if (err){
                            res.send({ msg: "New User not Added" })
                        }else{
                        let newUser = new userModel({ name, email, password: hash,previouse_search : [],current_search : [] })
                        await newUser.save();
                        res.send({ msg: "New User Added", user: newUser })
                        }
                    })
                }
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({ "msg": "User not added. smoething went wrong" })
    }
})

UserRoute.post("/login",async(req,res)=>{
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
           res.status(400).send({"msg" : "User not found. Please register"})
        }else{
            bcrypt.compare(password, user.password, function(err, result) {
                console.log(result)
                if(result == false){
                    res.status(400).send({"msg" : "Wrong password"})
                }else{
                    let token = jwt.sign({ userId: user._id },"weather-app-user");
                    res.send({ msg: `Login Success ! WelcomeBack ${user.name}`, token: token, user });  
                }
            });
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({ "msg": "User not logged in. smoething went wrong" })

    }
})

UserRoute.patch("/weatherData",UserAuth,async (req,res)=>{
    try {
        const {userId,data}  = req.body;
        const user = await userModel.findById({_id : userId})
        if(user){
            
            await userModel.updateOne({_id:userId},{$push : {previous_search : data}})
            const updated_user = await userModel.findByIdAndUpdate({_id : userId},{current_search : data});
            res.send({"msg" : "current search has been successfully saved", updated_data : updated_user.current_search})
        }

    } catch (error) {
        console.log(error);
        res.status(400).send({"msg" : "There is error while saving weather data"})
    }
   
})

UserRoute.get("/currentcity" ,UserAuth,async (req,res)=>{
    try {
        const { userId } = req.query;
        console.log(userId)
        const user = await userModel.findOne({"_id" : userId})
        console.log(user)
        if(user){
            res.send({"current_search" : user.current_search})
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({"msg" : "Error, can not fetch the data"})
    }
})

module.exports = UserRoute