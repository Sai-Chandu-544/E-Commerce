const mongoose=require("mongoose");
const owner_schema=mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    products:{
        type:[],
        default:[]
    },
    
    picture:String,
    gstin:String
});
module.exports=mongoose.model('owner_model',owner_schema);