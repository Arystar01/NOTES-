const mongoose = require("mongoose");
const bcrypt= require('bcrypt');


// Defining the schema of the person , schema is a keyword use to define the blueprint

const personSchema = new mongoose.Schema({
  name: { type: String },
  age: {
    type: Number,
    required: true,
  },

  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    unique: true,
  },
  username:{
    type:String, required:true
  },
  password:{
    type:String, required:true
  }
});
personSchema.pre('save', async function(next){

    const person= this;
  if(!person.isModified('password')) return next();



  try{
    //  hash password generated
    const salt= await bcrypt.genSalt(10);

    const hashedPassword= await bcrypt.hash(person.password, salt);
    person.password=hashedPassword;


    next();
  }
  catch(error){
    return next(error);
  }
})

personSchema.methods.comparePassword= async function(candidatePassword){
  try{
    const isMatch= await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  }
  catch(error){
    throw error;
  }
};
const person=mongoose.model('person', personSchema);
module.exports=person;