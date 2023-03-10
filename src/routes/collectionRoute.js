const express = require('express');
const router = express.Router();
const { validationOfToken } = require('../middlewares/authValidation');

const collectionController = require('../controllers/collectionController');

router.route('/save')
  .post(validationOfToken, collectionController.addCollectionToRecord);

router.route('/update')
  .post(validationOfToken, collectionController.editRecord);

router.route('/field')
  .delete(validationOfToken, collectionController.deleteRecord);

router.route('/details')
  .get(validationOfToken, collectionController.getAllCollections)
  .post(validationOfToken, collectionController.getCollectionData);

module.exports = router;