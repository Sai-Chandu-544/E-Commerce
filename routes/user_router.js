const express=require("express");
const router=express.Router();
const {registeruser,loginuser}=require("../controllers/authcontroller");
const islogin=require("../middlewares/islogin")






router.get("/login",(req,res)=>{
   return res.render("login")
})
router.get("/register",(req,res)=>{
    res.render("Register")
})
router.get("/homepage",(req,res)=>{
    res.render("homepage")
})
router.get("/products",islogin,(req,res)=>{
    res.render("products")
})
router.get("/cart",islogin,(req,res)=>{
    res.render("cart")
})



// if none of the fields are provided empty the user will be created in mogodb by default .so we use "try" and "catch" it finds error if any one of the field is empty
router.post("/register", registeruser);
router.post("/login", loginuser);
module.exports=router;
