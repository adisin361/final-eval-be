const express = require('express');

const router = express.Router();
const validate = require('../middlewares/authValidation');

const recordController = require('../controllers/recordController');

router.route('/save')
  .post(validate.validationOfToken, recordController.createRecordType);

router.route('/field')
  .post(validate.validationOfToken, recordController.addColumn)
  .patch(validate.validationOfToken, recordController.editColumnName)
  .delete(validate.validationOfToken, recordController.deleteColumnRecordType);

router.route('/update')
  .post(validate.validationOfToken, recordController.updateRecordType);

module.exports = router;