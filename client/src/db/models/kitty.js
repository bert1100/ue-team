const mongoose = require("mongoose");

var kittySchema = mongoose.Schema({
    name: String,
    user: Objectid
})

var Kitten = mongoose.model('Kitten', kittySchema)

module.exports = Kitten;