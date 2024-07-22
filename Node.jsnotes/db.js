const mongoose= require('mongoose');
require('dotenv').config();
//  setting mongodb url = mongodb://localhost:27017/mydatabase;
const mongooseUrl= 'mongodb://localhost:27017/hotels'

// const mongooseUrl=process.env.DB_url || 'mongodb://localhost:27017/hotels';
//  setting up connection
mongoose.connect(mongooseUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db= mongoose.connection;

//  adding event listeners;
db.on('connected', ()=>{
    console.log("Database connected succesfully");
})

db.on('error', ()=>{
    console.log("error occured in connecting database");
})
db.on('disconnected', ()=>{
    console.log("Database disconnected succesfully, and clodsing the database server");
})

//  exporting the db 
module.exports=db;