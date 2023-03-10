const collectionServices = require('../services/collectionService');

const getAllCollections = async (req, res) => {
  try {
    const data = await collectionServices.getAllCollections();
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

const addCollectionToRecord = async (req, res) => {
  try {
    const { collection_id, record } = req.body;
    const data = await collectionServices.addCollectionToRecord(collection_id, record);
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

const getCollectionData = async (req, res) => {
  try {
    const { collection_id } = req.body;
    const data = await collectionServices.getCollectionData(collection_id);
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



module.exports = { getAllCollections, addCollectionToRecord, editRecord, getCollectionData, deleteRecord };