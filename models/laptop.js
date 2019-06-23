const mongoose = require('mongoose');

const LaptopSchema = new mongoose.Schema({
    display : String,
    weith : Number,
    touchpad : Number,
    keyboard : String
})

const Laptop = mongoose.model('Laptop, LaptopSchema');

module.exports = Laptop;