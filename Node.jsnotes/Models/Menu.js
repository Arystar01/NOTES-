const mongoose= require('mongoose');

const menuSchema= new mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    price:{
        type:Number, required:true
    },
    taste:{
        type:String,
        enum:['Sweet', 'Sour', 'Spicy'], required:true
    },
    is_drink:{
        type:Boolean,
        default:false
    }
});

const menu= mongoose.model('menu', menuSchema);
module.exports=menu;