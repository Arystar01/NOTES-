const express= require('express');
const app=express();
//  there are 4 
const mongoose= require('mongoose');
const uri = 'mongodb://localhost:27017/trail1';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

  const UserSchema= new mongoose.Schema({
    name:String, age:Number, address: {
        street: String,
        city: String,
        state: String,
        zip: String
      }
  });
  const User = mongoose.model('User', UserSchema);

app.get('/', (req, res)=>{
    var customer= {
        name : 'Aryan', age:'23', phoneno: '1233232322'
    }
    // res.send("Hello aryan ss");
    res.send(customer);
})
app.get('/main', (req, res)=>{
    res.send("This is a main page .");
})

app.listen(5000); // creating the referecne port no of localhost