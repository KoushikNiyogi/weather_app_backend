const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    "name" : {type : String, required : true},
    "email" : {type : String, required : true},
    "password" : {type : String, required : true},
    "previous_search" : {type : Array},
    "current_search" : {type : Array}
})

const userModel = mongoose.model("user",UserSchema);

module.exports = userModel