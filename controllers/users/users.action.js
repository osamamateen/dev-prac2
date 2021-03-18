const { sequelize, User, Post, Comment } = require("../../models")

module.exports.create = async (req, res) => {
    const { name, email, role } = req.body

    try{
      const user = await User.create({ name, email, role})
      return res.status(200).json(user)
    }
    catch(err){
        return res.status(500).json(err)
    }
};

module.exports.getOne = async (req, res) => {
    const { id } = req.params
    try{
        const user = await User.findOne({
            // include: [Post],
            include: { 
                model: Post ,
                include:[Comment]
            },
            where: { uuid : id }
            
        })
        return res.status(200).json(user)
    }catch(err){
        return res.status(500).json(err)
    }
};

module.exports.getAll = async (req, res) => {
    try{
        const users = await User.findAll()
        return res.status(200).json(users)
    }catch(err){
        return res.status(500).json(err)
    }
};