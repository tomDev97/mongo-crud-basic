const mongoose = require('mongoose');

//INIT SCHEMA COURSE
const CourseSchema = new mongoose.Schema({
    name : String,
    author: String,
    tags : [String],
    date : {type : Date, default : Date.now},
    isPublic : Boolean,
    price : Number
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;

