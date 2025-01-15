const mongoose=require("mongoose");
const product_schema=mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    discount:{
        type:String,
        default:0
    },
    bg_color:String,
    panel_color:String,
    text_color:String


});
module.exports=mongoose.model('product_model',product_schema);