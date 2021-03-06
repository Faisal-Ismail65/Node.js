const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Contact = require('../model/course.model');

router.get('/',(req,res)=>{
    res.render("index");
});
router.get('/add-new',(req,res)=>{
    res.render("add");
});

router.post('/add-new',(req,res)=>{
    // console.log(req.body);    
    let newContact = Contact({
        Name : req.body.name,
        cnic : req.body.cnic,
        contact : req.body.contact,
        img: req.body.img
    });
    newContact.save((err,contact)=>{
        if(!err){
            res.redirect('list');
        }
    });


    
});

router.get('/list',(req,res)=>{
        
    Contact.find((err,docs)=>{
        if(!err){
            res.render("list",{data : docs});
        }else {
            res.send("error");
        }
    }).lean(); 
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