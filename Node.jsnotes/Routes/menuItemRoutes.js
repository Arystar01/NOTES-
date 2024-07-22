const express= require('express');
const routes= express.Router();
const menu=require('../Models/Menu');

routes.post("/", async (req,res)=>{
    try{
       const data= req.body;
       const newItem= new menu(data);
       const response = await newItem.save();
    
    console.log("Data fetched succesfully.");
    res.status(200).json(data);
    }
    catch(error){
        console.log("error occuers while saving data in the database ", error);
    res.status(404).json({ error: "internal server error" });
    }
});

module.exports=routes;