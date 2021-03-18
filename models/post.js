'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
  
    static associate({User,Comment}) {
      // define association here
      this.belongsTo(User, { foreignKey : 'userId'})
      this.hasMany(Comment , { foreignKey : 'postId'})
    }

    toJson(){
      return {...this.get(), id : undefined}
    }
  };
  Post.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    body: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'posts',
    modelName: 'Post',
  });
  return Post;
};