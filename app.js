if(process.env.NODE_EVN !='production'){
    require('dotenv').config()
}



const express = require("express");
const app =express();
const mongoose =require("mongoose")
const path = require("path")
const methodOverride = require('method-override');
const ejsMate = require("ejs-mate");
const ExpressError =require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport =require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");



const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");



app.use(methodOverride('_method'));



const dbURL =process.env.ATLASDB_URL;

main().then(() =>{
    console.log("Connected to MongoDb") 
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbURL);

}

app.set("view engine" ,"ejs");
app.set("views" ,path.join(__dirname ,"views"));
app.use(express.urlencoded({extended :true}));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname , "/public")))

//Connect Mongo Session Store
const store = MongoStore.create({
    mongoUrl:dbURL,
    crypto:{
        secret: process.env.SECRET
    },
    touchAfter: 24 *3600
     
});

store.on("error",() =>{
    console.log("Error in Mongo Session Store" , err);
})

//Session Configuration
const sessionOptions = {
    store :store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true, 
    cookie:{
        expires:Date.now() + 1000* 60 * 60 * 24 * 7,
        maxAge:1000* 60 * 60 * 24 * 7,
        httpOnly:true
    }
};

app.get("/", (req, res) => {
  res.redirect("/listing");
});



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req,res,next) =>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser =req.user;
    //console.log(res.locals.success);
    next();
})


//Listing Routes
app.use("/listing",listingRouter)
//Reviews Routers
app.use("/listing/:id/reviews",reviewRouter);
//User Routes
app.use("/",userRouter);


app.listen(8080 ,(req,res) =>{
    console.log("Server is listening to port:8080")
})

app.all(/.*/,(req,res,next) =>{
    next(new ExpressError(404 ,"Page Not Found!"));
})

app.use((err,req,res,next) =>{
    let {status=500 ,message="Something Went Wrong"} =err;
    res.status(status).render("error.ejs",{err});
})
