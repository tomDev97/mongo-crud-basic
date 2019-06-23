const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name : String,
    age : Number,
    school : [String],
    exs : [String],
    language : [String]
})

const Dev = mongoose.model('Dev', DevSchema);

module.exports = Dev;