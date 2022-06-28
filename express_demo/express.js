const express = require('express');
const path = require('path');
const app = express();

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/about',(req,res)=>{
    res.send("this is an about page");
});


app.listen(3000,()=>{
console.log("server is running...");
});
