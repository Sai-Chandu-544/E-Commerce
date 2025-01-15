const jwt=require("jsonwebtoken");
require("dotenv").config();
const generatetoken=(user)=>{
    return jwt.sign({email:user.email,id:user._id},process.env.JWT_KEY);
    
}
// console.log(process.env.JWT_KEY) Random Key can be selected by manually and store it in .env file
module.exports.generatetoken=generatetoken;