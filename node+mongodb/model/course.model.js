const mongoose = require('mongoose');

var courseSchema = new mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    cnic : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    }
});

const contact =  module.exports = mongoose.model("Contact",courseSchema);