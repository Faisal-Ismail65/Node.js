const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Contact = require('../model/course.model');

router.get('/',(req,res)=>{
    res.render("index");
});

router.get('/list',(req,res)=>{

    Contact.find((err,data)=>{
        if(!err){
            res.send(data.toString());
        }
    })
});
router.post('/add',(req,res)=>{
   let newContact = new Contact({
        Name : req.body.Name,
        cnic : req.body.cnic,
        contact : req.body.contact,
        img : req.body.img
   });
    newContact.save((err,contact)=>{
            if(err){
                res.json({msg: "failed to add contact"});
            }else{
                res.json({msg: "contact added successfully"});
            }
    });
});


module.exports = router;