const express=require("express")
const router=express.Router();
const owner_model=require("../models/owner_model.js");
router.get("/",(req,res)=>{
    res.send("Hi This is from Owner Page")
})


router.post("/create",async (req,res)=>{
    let owners=await owner_model.find();
    if(owners.length>0){
        return res
        .status(503)
        .send("You dont have premission to create Owner.")
    }
    let {fullname,email,password}=req.body;
    let create_owner= await owner_model.create({
        fullname,
        email,
        password,
    })
    res.status(201).send(create_owner);


    
   
   
});
module.exports=router;