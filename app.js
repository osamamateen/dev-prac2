const { sequelize, User, Post } = require("./models")
const express = require("express")
const path = require("path");
const lumie = require("lumie");


const app = express();
app.use(express.json())

 
lumie.load(app, {
  preURL: "api",
  verbose: true,
  ignore: ["*.spec"],
  controllers_path: path.join(__dirname, "controllers")
});
 

app.listen(5000 , async () => {
    console.log("Server started on port 5000")
    await sequelize.authenticate()
    console.log("Database connected")
})
