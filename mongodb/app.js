const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const route = require('./routes/route');
var app = express();
app.use(cors());

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost:27017/contactlist');

mongoose.connection.on('connected',()=>{
    console.log('connected to database');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('error in database connection'+ err);
    }
});

app.use('/',route);

// app.use(express.static(path.join(__dirname,'public')));


app.get('/',(req,res)=>{
    res.send("hello world");
})


var port = 7000;
app.listen(port,()=>{
    console.log(`server is running on ${port} number`);
})
