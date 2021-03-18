const { sequelize, User, Post, Comment } = require("../../models")
module.exports.create = async (req, res) => {
    const { userUuid , body } = req.body

    try{
        const user = await User.findOne({
            where : {uuid : userUuid}
        })
        
        const post = await Post.create({
            body : body, 
            userId: user.id
        })

        return res.status(200).json(post)
    }
    catch(err){
        return res.status(500).json(err)
    }
};

module.exports.getOne = async (req, res) => {
    const {id} = req.params
    try{
        const post = await Post.findOne({include: [User , Comment] , where : {uuid:id}})
        return res.status(200).json(post)
    }
    catch(err){
        return res.status(500).json(err)
    }
};

module.exports.getAll = async (req, res) => {
    try{
        const posts = await Post.findAll({include: [User , Comment] })
        return res.status(200).json(posts)
    }
    catch(err){
        return res.status(500).json(err)
    }
};