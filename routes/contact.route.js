const express = require("express");
const contactModel = require("../models/contact.model");
const router = express.Router();
//contact route
router.post("/", async(req,res)=>{
    try {
        const contactData = await contactModel.create({
            name:req.body.name,
            email:req.body.email,
            number:req.body.number,
            subject:req.body.subject,
            message:req.body.message
         })

        res.status(200).json({success:true, contactData});
    } catch (error) {
        res.status(400).json({
            error:error,
            success:false
        })
    }
   

   });

   //get contact data
   router.get("/getdata", async(req,res)=>{
    try {
        const data =  await contactModel.find();
        res.status(200).json({success:true, data })
    } catch (error) {
      res.status.json({
        success:false,
        error:error
      })
        
    }
   

   } )


   module.exports = router;
