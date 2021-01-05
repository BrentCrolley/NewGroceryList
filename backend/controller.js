// const model = require('./model.js');

// const controller = {
//   getGrocery: (req, res) => {
//     model.getGrocery((err, result) => {
//       if (err) {
//         res.status(400).send(err);
//       } else {
//         res.status(200).send(result);
//       }
//     })
//   },
//   postGrocery: (req, res) => {
//     model.postGrocery(req, (err, results) => {
//       if (err) {
//         res.status(400).send(err);
//       } else {
//         res.status(200).send(results);
//       }
//     })
//   },
//   deleteGrocery: (req, res) => {
//     model.deleteGrocery(req.params.id, (err, result) => {
//       if (err) {
//         res.status(400).send(err);
//       } else {
//         res.status(200).send(result)
//       }
//     })
//   },
//   updateGrocery: (req, res) => {
//     model.updateGrocery(req.params.id, (err, result) => {
//       if (err) {
//         res.status(400).send(err);
//       } else {
//         res.status(200).send(result);
//       }
//     })
//   }
// };

// module.exports = controller;

const model = require('./model.js');

const controller = {
  getGrocery: (req, res) => {
    model.getGrocery()
      .then((results) => {res.status(200).json(results)})
      .catch((err) => {res.status(400).send(err)})
  },
  postGrocery: (req, res) => {
    console.log(req.body);
    let {item, qty} = req.body;
    model.postGrocery({item, qty})
      .then(() => {res.status(200).send('posted')})
      .catch((err) => {res.status(400).send(err)})
  },
  updateGrocery: (req, res) => {
    model.updateGrocery(req.params.id, req.body. priority)
      .then(() => {res.status(200).send('updated')})
      .catch((err) => {res.status(400).send(err)})
  },
  deleteGrocery: (req, res) => {
    const object = {
      id: req.body.id
    }
    model.deleteGrocery(object)
      .then(() => {res.status(200).send('deleted')})
      .catch((err) => {res.status(400).send(err)})
  }
}

module.exports = controller;