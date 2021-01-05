const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:/grocery';

mongoose.Promise = global.Promise;

let db = mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('connected to mongo'))


let grocerySchema = mongoose.Schema({
  item: {type: String},
  qty: {type: Number}
})

let Grocery = mongoose.model('groceries', grocerySchema)

module.exports = Grocery

// const mysql = require('mysql');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'student',
//   database: 'grocerylist2'
// });

// db.connect();

// db.query('SELECT "this is working" AS solution', function(error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].solution);
// })

// module.exports = db;