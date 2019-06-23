const mongoose = require('mongoose');
const Course = require('./models/courses');

mongoose.connect('mongodb://localhost:27017/courses', { useNewUrlParser: true })
    .then(() => console.log('connected to MongoDB'))
    .catch((err) => console.log(err));

/**
 * Query author = Mosh => get name, author, price--------
 */

// Course.find({ auhtor : 'Mosh' })
//     .select('name author price')
//     .then(console.log)
//     .catch(console.log)



/**
 * Query price = 12 => get name, price-------------------
 */

// Course.find({ price: { $eq: 12 } })
//     .select('name price')
//     .then(console.log)
//     .catch(console.log)


/**
 * Query price > 12 && < 15 => get name, price-------------------
 */

// Course.find({ price: { $gte: 12,$lte : 15 } })
//     .select('name price')
//     .then(console.log)
//     .catch(console.log)


/**
* Query price = [12,15,20] => get name, price-------------------
*/

// Course.find({ price: { $in : [12, 15,20] } })
// .select('name price')
// .then(console.log)
// .catch(console.log)



/**
* Query pauthor = Mosh && 10 < price < 20 -------------------
*/

// Course.find()
//     .and([{author: 'Mosh'},{price : {$gt : 10, $lt : 20}}])
//     .select('name author price')
//     .then(console.log)
//     .catch(console.log)



/**
 * ----------------------------------------REGULAR EXPRESSION ------------------------------------------------
 */

//---------find name have string : 'node' in name
// Course.find({name : /^node/i})
//     .then(console.log)
//     .catch(console.log)

//---------find name have string : 'js' last 
// Course.find({name : /js$/i})
//     .select('name author price')
//     .then(console.log)
//     .catch(console.log)

//---------find name have string : 'js' in name
// Course.find({ name: /.*js.*/i })
//     .select('name author price')
//     .then(console.log)
//     .catch(console.log)