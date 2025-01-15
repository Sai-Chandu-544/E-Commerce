const mongoose=require("mongoose");
require("dotenv").config();
const mongo_url=process.env.DB_URL;

mongoose.connect(mongo_url)
.then(()=>{
    console.log("Database Connected Successfully");
})
.catch((err)=>{
    console.log(err)
})
module.exports=mongoose.connection;