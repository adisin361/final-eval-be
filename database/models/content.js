/* eslint-disable no-unused-vars */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Content.belongsTo(models.RecordType, {
        foreignKey: 'content_type_id'
      });
      Content.belongsTo(models.Collection, {
        foreignKey: 'collection_id'
      });
    }
  }
  Content.init({
    values: DataTypes.JSON,
    record_type_id: DataTypes.INTEGER,
    collection_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Content',
  });
  return Content;
};