const mongoose=require("mongoose");
const user_schema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    cart:{
        type:[],
        default:[]
    },
    password:{
          type:String,
          required:true
    },
    orders:{
        type:[],
        default:[]
    },
    contact:Number,
    picture:String,
});
module.exports=mongoose.model('user_model',user_schema);

