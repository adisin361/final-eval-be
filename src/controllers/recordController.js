const recordService = require('../services/recordService');

const createRecordType = async (req, res) => {
  try {
    const recordName = req.body.name;
    const newRecordType = await recordService.createRecordType(recordName);
    res.status(201).json({
      data: newRecordType
    });
  }
  catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const updateRecordType = async (req, res) => {
  try {
    const recordName = req.body.name;
    const recordId = req.body.id;
    const updatedRecordType = await recordService.updateRecordType(recordName, recordId);
    res.status(200).json({
      data: updatedRecordType
    });
  }
  catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const addColumn = async (req, res) => {
  try {
    const recordId = req.body.id;
    const columnName = req.body.field_name;
    const columnType = req.body.field_type;
    const updatedRecordType = await recordService.addColumn(recordId, columnName, columnType);
    res.status(200).json({
      data: updatedRecordType
    });
  }
  catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const editColumnName = async (req, res) => {
  try {
    const recordId = req.body.id;
    const columnName = req.body.field_name;
    const newColumnName = req.body.new_field_name;
    const updatedRecordType = await recordService.editColumnName(recordId, columnName, newColumnName);
    res.status(200).json({
      data: updatedRecordType
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const deleteColumnRecordType = async (req, res) => {
  try {
    const recordId = req.body.id;
    const columnName = req.body.field_name;
    const updatedRecordType = await recordService.deleteColumnRecordType(recordId, columnName);
    res.status(200).json({
      data: updatedRecordType
    });
  }
  catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const getRecordTypeById = async (req, res) => {
  try {
    const recordId = req.body.id;
    const recordType = await recordService.getRecordTypeById(recordId);
    res.status(200).json({
      data: recordType
    });
  }
  catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = { createRecordType, updateRecordType, addColumn, editColumnName, deleteColumnRecordType, getRecordTypeById };