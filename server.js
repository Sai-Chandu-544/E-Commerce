const express=require("express");
const app=express();
const db=require("./configuration/mongoose_connection");
const bcryptjs=require("bcryptjs");
require("dotenv").config();
const PORT=process.env.PORT || 5000;

// importing bodyparser and use of bodyparser
const bodyparser=require("body-parser");
app.use(express.json());                    // Use express.json() instead of bodyParser.json().express.json() is the built-in middleware for parsing JSON bodies in Express.js.
app.use(express.urlencoded({extended:true}));


// importing cookieparser and use of cookieparser
const cookieParser=require("cookie-parser");
app.use(cookieParser());

// express-session
const expressSession=require("express-session");
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET,
})
);
// flash
// const flash=require("connect-flash");
// app.use(flash())




// importing path and use of path
const path=require("path");
app.use(express.static(path.join(__dirname,"public")));
// app.use('/css', express.static(path.join(__dirname, 'public/css')));
// app.use('/images', express.static(path.join(__dirname, 'public/images')));

// importing ejs and use of ejs
const ejs=require("ejs");
app.set("view engine","ejs")
// app.set('views', './views'); // or path.join(__dirname, 'views')
app.set("views",path.resolve("./views"))


//importing Routes
const user_router=require("./routes/user_router.js");
const product_router=require("./routes/product_router.js");
const owner_router=require("./routes/owner_router.js");
// using Routes
app.use("/users",user_router)          // "user_model" is the path to which the router will be mounted. Any requests to this path will be handled by the router.
app.use("/products",product_router)
app.use("/owners",owner_router)

console.log(process.env.NODE_ENV);


app.listen(PORT,()=>console.log("Server is Running"))
