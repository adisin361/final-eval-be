/* eslint-disable indent */
const { RecordType, Collection, Content } = require('../../database/models');

const createRecordType = async (name) => {
  const newCollection = await Collection.create({
    name,
  });
  return RecordType.create({
    name, collection_id: newCollection.id
  });
};

const updateRecordType = async (name, id) => {
  await RecordType.update({
    name
  },
    {
      where: {
        id
      }
    });

  const updatedRecordType = await RecordType.findOne({
    where: {
      id
    }
  });

  await Collection.update({
    name
  },
    {
      where:
      {
        id: updatedRecordType.collection_id
      }
    });

  return {
    message: 'Update Successful'
  };
};

const addColumn = async (id, field_name, field_type) => {
  const recordType = await RecordType.findOne({
    where: {
      id
    }
  });

  const newFields = { ...recordType.field };
  newFields[field_name] = field_type;
  await RecordType.update({
    fields: newFields
  },
    {
      where:
      {
        id
      }
    });

  const allContent = await Content.findAll({
    where: {
      record_type_id: recordType.id
    }
  });

  await Promise.all(allContent.map((record) => {
    const newValue = { ...record.values };
    newValue[field_name] = null;
    Content.update({
      values: newValue
    }, {
      where: {
        id: record.id
      }
    });
  }));

  return {
    message: 'Column Add Successful'
  };
};

const editColumnName = async (id, field_name, new_field_name) => {
  const recordType = await RecordType.findOne({
    where: {
      id
    }
  });

  const newFields = { ...recordType.field };

  newFields[new_field_name] = newFields[field_name];
  delete newFields[field_name];

  await RecordType.update({
    field: newFields
  },
    {
      where: {
        id
      }
    });

  const allContent = await Content.findAll({
    where: {
      record_type_id: recordType.id
    }
  });

  await Promise.all(allContent.map((record) => {
    const newValue = { ...record.value };
    newValue[new_field_name] = newValue[field_name];
    delete newValue[field_name];

    Content.update({
      value: newValue
    },
      {
        where: {
          id: record.id
        }
      });
  }));

  return {
    message: 'Edit Column Name Successful'
  };
};

const deleteColumnRecordType = async (id, field_name) => {
  const recordType = await RecordType.findOne({
    where: {
      id
    }
  });
  const newFields = { ...recordType.field };
  delete newFields[field_name];
  await RecordType.update({
    field: newFields
  },
    {
      where: {
        id
      }
    });

  const allContent = await Content.findAll({
    where: {
      record_type_id: recordType.id
    }
  });

  await Promise.all(allContent.map((record) => {
    const newValue = { ...record.value };
    delete newValue[field_name];
    Content.update({
      value: newValue
    },
      {
        where: {
          id: record.id
        }
      });
  }));

  return {
    message: 'Column Delete Successful'
  };
};

const getRecordTypeById = async (id) => {
  const response = await RecordType.findOne({
    where: {
      collection_id: id
    }
  });
  console.log(response);
  return response;
};


module.exports = { createRecordType, updateRecordType, addColumn, editColumnName, deleteColumnRecordType, getRecordTypeById };