const model = require('./model.js');

const controller = {
  getGrocery: (req, res) => {
    model.getGrocery((err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },
  postGrocery: (req, res) => {
    model.postGrocery(req, (err, results) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  },
  deleteGrocery: (req, res) => {
    model.deleteGrocery(req.params.id, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result)
      }
    })
  },
  updateGrocery: (req, res) => {
    model.updateGrocery(req.params.id, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(result);
      }
    })
  }
};

module.exports = controller;