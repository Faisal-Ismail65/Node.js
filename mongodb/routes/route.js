const express = require('express');
const Contact = require('../models/contacts'); 
const router = express.Router();
const path = require('path');


router.get('/contacts',(req,res,next)=>{
    
    Contact.find((err,contacts)=>{
        res.json(contacts);
    });

});

router.post('/contacts',(req,res,next)=>{
        let newContact = Contact({
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            phone : req.body.phone
        });
        newContact.save((err,contact)=>{
            if(err){
                res.json({msg:'failed to add contact'});
            } else{
                res.json({msg:'contact added succesfully'});
            }
        });
})

router.delete('/contacts/:id',(req,res,next)=>{
    Contact.remove({_id:req.params.id},(err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});
router.get('/SignUp',(req,res,next)=>{

    res.sendFile(path.join(__dirname,'../public/index.html'));
});

router.post('/SignUp',(req,res)=>{
    var data = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        phone : req.body.phone
    }
    var mo = Contact(data);
    mo.save((err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("done");
        }
    });
    res.send("data is added succesfully");
});

module.exports = router;