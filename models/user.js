'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Post , Comment}) {
      // define association here
      this.hasMany( Post , { foreignKey : 'userId'})
      this.hasMany( Comment , { foreignKey : 'userId'})
    } 

    toJson(){
      return {...this.get(), id : undefined}
    }
  };
  User.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    email: DataTypes.STRING,
    roll: DataTypes.STRING
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};