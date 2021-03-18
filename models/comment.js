'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Post , User}) {
      // define association here
      this.belongsTo(Post , { foreignKey : 'postId'})
      this.belongsTo(User , { foreignKey : 'userId'})
    }
  };
  Comment.init({
    body: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName : 'comments',
    modelName: 'Comment',
  });
  return Comment;
};