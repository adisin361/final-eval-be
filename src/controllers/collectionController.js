const collectionServices = require('../services/collectionService');

const listCollections = async (req, res) => {
  try {
    const data = await collectionServices.listCollections();
    res.status(200).json({
      data: data,
    });
  }

  catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const addRecord = async (req, res) => {
  try {
    const { collection_id, record } = req.body;
    const data = await collectionServices.addRecord(collection_id, record);
    res.status(200).json({
      data: data,
    });
  }

  catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const editRecord = async (req, res) => {
  try {
    const { collection_id, record } = req.body;
    const data = await collectionServices.editRecord(collection_id, record);
    res.status(200).json({
      data: data,
    });
  }

  catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const getDataOfCollection = async (req, res) => {
  try {
    const { collection_id } = req.body;
    const data = await collectionServices.getDataOfCollection(collection_id);
    res.status(200).json({
      data: data,
    });
  }

  catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const { collection_id, record } = req.body;
    const data = await collectionServices.deleteRecord(collection_id, record);
    res.status(200).json({
      data: data,
    });
  }

  catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};



module.exports = { listCollections, addRecord, editRecord, getDataOfCollection, deleteRecord };