var mongoose = require('mongoose')
var schema = mongoose.Schema({
Name:String,
Category: String,
Price: Number
})
var ProductCart = mongoose.model("cart", schema)
module.exports = ProductCart