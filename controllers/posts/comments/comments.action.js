const { sequelize, Comment, User } = require("../../../models")
module.exports.create = async (req, res) => {
    const { userUuid , body  } = req.body
    const postId = req.params.id

    try{
        const user = await User.findOne({
            where : {uuid : userUuid}
        })
        
        const comment = await Comment.create({
            body : body, 
            userId: user.id,
            postId : postId
        })

        return res.status(200).json(comment)
    }
    catch(err){
        return res.status(500).json(err)
    }
};