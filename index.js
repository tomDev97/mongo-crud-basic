const mongoose = require('mongoose');
const Course = require('./models/courses');

mongoose.connect('mongodb://localhost:27017/mongo-crud', {useNewUrlParser : true })
    .then(() => console.log('connected to MongoDB'))
    .catch((err) => console.log(err));

let newCourse = new Course({
    _id: 'id_test',
    name : 'MngoDB',
    author : 'teacherThree',
    tags : [ 'mongodb', 'nodejs'],
    isPublic : false,
    price : 36000
})

newCourse.save()
    .then(() => console.log(`save success : ${newCourse}`))
    .catch((err) => console.log(err))


// mongoimport --db courses --collection courses --file data.json --jsonArray 
    