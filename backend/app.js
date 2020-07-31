const express = require('express');
const bodyParser =require("body-parser");
const mongoose=require('mongoose');
const postsRoutes=require("./routes/posts");
const app = express();

mongoose.connect("mongodb+srv://bhumika:qcgFhFrGcGsTmWld@cluster0.qxloh.mongodb.net/node-angular?retryWrites=true&w=majority")
.then(()=>{
console.log("Connected to the database!")
})
.catch(()=>{
    console.log("Connection failed");
})

app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,OPTIONS,DELETE");
    next();
})

app.use("/api/posts",postsRoutes);

module.exports = app;
