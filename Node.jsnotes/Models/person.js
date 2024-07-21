const mongoose = require("mongoose");
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
});

const person=mongoose.model('person', personSchema);
module.exports=person;