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
const personRoutes= require('./Routes/personRoutes');
app.use('/person', personRoutes);

const meunItmeRoutes=require('./Routes/menuItemRoutes');
app.use('/menu',meunItmeRoutes);


app.listen(3000);
