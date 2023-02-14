const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cattle extends Model {}

Cattle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ranchNum: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ranch',
        key: 'id',
      },
    },
    tagID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vaccine: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fatherID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cattle',
        key: 'id',
      },
    },
    motherID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'cattle',
        key: 'id',
      },
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: DataTypes.NOW,
    },
    currentLocation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'cattle',
  }
);

module.exports = Cattle;