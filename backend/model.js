// const db = require('./db.js');

// const model = {
//   getGrocery: (callback) => {
//     var queryStr = `SELECT * FROM groceries `;
//     db.query(queryStr, (err, result) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, result);
//       }
//     })
//   },

//   postGrocery: (req, callback) => {
//     var {item, qty} = req.body;
//     var queryStr = `INSERT INTO groceries (item, qty) VALUES ("${item}", ${qty})`;
//     db.query(queryStr, (err, result) => {
//       if (err) {
//         callback(err);
//       } else {
//         callback(null, result);
//       }
//     })
//   }
// }

// module.exports = model;

const Grocery = require('./db');

module.exports = {
  getGrocery: () => Grocery.find({}),
  postGrocery: (item, qty) => Grocery.create(item, qty),
  updateGrocery: (_id, qty) => Grocery.findOneAndUpdate({_id}, {qty: qty}),
  deleteGrocery: (_id) => Grocery.deleteOne({_id})
}
