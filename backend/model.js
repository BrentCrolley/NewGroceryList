const db = require('./db.js');

const model = {
  getGrocery: (callback) => {
    var queryStr = `SELECT * FROM grocerylist`;
    db.query(queryStr, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    })
  }
}

module.exports = model;