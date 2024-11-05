var mongoose = require('mongoose')
var schema = mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    ConPassword:String
})
var User = mongoose.model("user", schema)
module.exports = User