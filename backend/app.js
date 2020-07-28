const express = require('express');
const bodyParser =require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,PUT,OPTIONS");
    next();
})

app.post("/api/posts",(req,res,next)=>{
    const post=req.body;
    console.log(post);
    res.status(201).json({
        message:"Post added successfully"
    });
});

app.get('/api/posts',(req,res,next)=>{
    const posts=[
    { 
        id:"1234",
        title:"bhumika",
        content:"she is a good girl"
    },
    { 
        id:"12345",
        title:"she",
        content:"she loves many people"
    }
    ];
    res.status(200).json({
        message:'Post fetched successfully',
        posts:posts
    });
    // next();
});

module.exports = app;
