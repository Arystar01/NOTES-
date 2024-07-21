const express = require('express');
const app = express();
const db = require("./db");
const person = require("./Models/person");
const menu= require("./Models/Menu");
// applying bodyparser
const bodyparser = require("body-parser");
app.use(bodyparser.json()); // req.body

app.get("/", (req, res) => {
  res.send("Welcome to the main page of the hotel ... love to welcome you...N");
});

//  creating a post method , it will send the data from the client to the server
app.post("/person", async (req, res) => {
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
app.get('/person', async (req, res) => {
  try {
    const data = await person.find();
    console.log("Data fetched succesfully.");
    res.status(200).json(data);
  } catch (err) {
    console.log("error occuers while saving data in the database ", error);
    res.status(404).json({ error: "internal server error" });
  }
});

app.post("/menu", async (req,res)=>{
    try{
       const data= req.body;
       const newItem= new menu(data);
       const response = await newItem.save();
    
    console.log("Data fetched succesfully.");
    res.status(200).json(data);
    }
    catch(err){
        console.log("error occuers while saving data in the database ", error);
    res.status(404).json({ error: "internal server error" });
    }
});
app.listen(3000);
