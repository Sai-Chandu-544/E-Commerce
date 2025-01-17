const user_model=require("../models/user_model.js");
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken");
const {generatetoken}=require("../utils/generatetoken");



module.exports.registeruser=async (req,res)=>{
    try{
        let {username,email,password}=req.body; 
        let user= await user_model.findOne({email:email})  
        if(user){res.status(401).send("You Already Have an Account Please Login")}
         else {
              const hashedPassword = await bcryptjs
          .hash(password, 10);
              let user = await user_model.create({ username, email, password: hashedPassword })
            //   console.log(user.password)
            res.send("Registered Successfully")
              
              // res.redirect("registerresponse")
            }
        
    }

    catch(err){
        console.log("Error Occured!")
        res.status(400).send(err.message)
    }
}



module.exports.loginuser = async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await user_model.findOne({ email: email });

    if (!user) {
      return res.status(401).send("You Don't have an Account, Please Register");
    }

    const result = await bcryptjs.compare(password, user.password);

    if (result) {
      let token = generatetoken(user);
      res.cookie("token", token);
      return res.redirect("homepage");
    } else {
      return res.status(401).send("Email or Password incorrect");
    }
  } catch (err) {
    return res.status(500).send(err.message);
  }
};




