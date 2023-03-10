/* eslint-disable indent */
const { Collection, Content, RecordType } = require('./../../database/models');

const getAllCollections = async () => {
  return await Collection.findAll();
};

const addCollectionToRecord = async (collection_id, record) => {
  const collection = await Collection.findOne({
    where:
    {
      id: collection_id
    },
    include: RecordType
  });

  if (!collection) {
    throw new Error('Collection not found');
  }

  const newRecord = await Content.create({
    collection_id,
    record_type_id: collection.RecordType.id,
    values: record,
  });

  return newRecord;
};

const editRecord = async (collection_id, record) => {
  const collection = await Collection.findOne({
    where:
    {
      id: collection_id
    },
  });

  if (!collection) {
    throw new Error('Collection not found');
  }

  await Content.update({
    values: record.values
  },
    {
      where:
      {
        id: record.id
      }
    });

  return {
    message: 'Update successful'
  };
};

const getCollectionData = async (collection_id) => {
  const collection = await Collection.findOne({
    where:
    {
      id: collection_id
    },
    include: Content
  });
  if (!collection) {
    throw new Error('Collection not found');
  }

  return collection.Contents;
};

const deleteRecord = async (collection_id, record_id) => {
  const collection = await Collection.findOne({
    where:
    {
      id: collection_id
    },
  });

  if (!collection) {
    throw new Error('Collection not found');
  }

  await Content.destroy({
    where:
    {
      id: record_id
    }
  });

  return {
    message: 'Update successful'
  };
};

module.exports = { getAllCollections, addCollectionToRecord, editRecord, getCollectionData, deleteRecord };