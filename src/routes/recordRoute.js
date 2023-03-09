const express = require('express');

const router = express.Router();

const recordController = require('../controllers/recordController');

router.route('/save')
  .post(recordController.createRecordType);

router.route('/field')
  .post(recordController.addColumn)
  .patch(recordController.editColumnName)
  .delete(recordController.deleteColumnRecordType);

router.route('/update')
  .post(recordController.updateRecordType);

module.exports = router;