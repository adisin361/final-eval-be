'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecordType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RecordType.hasMany(models.Content, {
        foreignKey: 'record_type_id'
      });

      RecordType.belongsTo(models.Collection, {
        foreignKey: 'collection_id'
      });
    }
  }
  RecordType.init({
    name: DataTypes.STRING,
    fields: DataTypes.JSON,
    collection_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RecordType',
  });
  return RecordType;
};