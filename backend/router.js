const controller = require('./controller.js');
const express = require('express');
const router = express.Router();

router
  .route('/groceries')
  .get(controller.getGrocery)
  .post(controller.postGrocery);

router
  .route('/groceries/:_id')
  .delete(controller.deleteGrocery)
  .put(controller.updateGrocery);


module.exports = router;