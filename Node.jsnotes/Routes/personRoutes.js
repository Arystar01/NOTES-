const express= require('express');
const routes= express.Router();
const person= require('../Models/person');
routes.post('/', async (req, res) => {
    try {
      const data = req.body;
      // assuming the request body contains the person data
      const newPerson = new person(data); // creating a newpersoon and in it data is saved in the order of person i.e person schema
      //  saving the newperson data now
      const response = await newPerson.save();
      console.log("Data saved , wow");
      res.status(200).json(response);
    } catch (error) {
      console.log("error occuers while saving data in the database ", error);
      res.status(404).json({ error: "internal server error" });
    }
  });
  
  //  creating a get method to get all the saved data from database and displaying it
  routes.get('/', async (req, res) => {
    try {
      const data = await person.find();
      console.log("Data fetched succesfully.");
      res.status(200).json(data);
    } catch (err) {
      console.log("error occuers while saving data in the database ", error);
      res.status(404).json({ error: "internal server error" });
    }
  });
  routes.put('/:id', async (req, res)=>{
    try{
        const personId= req.params.id;
        const updateData= req.body;
        const response= await person.findByIdAndUpdate(personId, updateData ,{
            new:true, runValidators:true,

        })
        if(!response){
            return res.status(404).json({error: "Person not found"});
        }
        console.log("Data updated succesfully ....");
        res.status(200).json(response);
    }
    catch(err){
        console.log("error occuers while saving data in the database ", error);
      res.status(404).json({ error: "internal server error" });
    }
  })

  routes.delete('/:id', async(req, res)=>{

    try{
        const personId= req.params.id;
        const response = await person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error: "Person not found"});
        }
        console.log("Data deleted succesfully ....");
        res.status(200).json(response);

    } catch(err){
        console.log("error occuers while saving data in the database ", error);
      res.status(404).json({ error: "internal server error" });
    }
    
   
  })
module.exports= routes;