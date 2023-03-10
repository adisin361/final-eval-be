const express = require('express');
const router = express.Router();

const collectionController = require('../controllers/collectionController');

router.route('/save')
  .post(collectionController.addRecord);

router.route('/update')
  .post(collectionController.editRecord);

router.route('/field')
  .delete(collectionController.deleteRecord);

router.route('/details')
  .get(collectionController.listCollections)
  .post(collectionController.getDataOfCollection);

module.exports = router;