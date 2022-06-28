const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/servicio',/*{useNewUrlParser:true},*/(error) => {
    if(!error){
        console.log("connected to database");
    } else{
        console.log("error connecting database");    
    }
});

const Course = require("./course.model");
