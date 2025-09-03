const User = require("../models/user.js");

module.exports.renderSignupForm =(req,res) =>{
    res.render("users/signup.ejs");
}
module.exports.signup = async (req,res,next) =>{
    try{
    const {email,username,password} =req.body;
    let newUser = new User({email,username});
    let registeredUser =await User.register(newUser, password);
    //console.log(registeredUser);
    req.login(registeredUser ,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to Wanderlust!");
        res.redirect("/listing");
    } );
    
    }
    catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}
module.exports.renderLoginForm = (req,res) =>{
    res.render("users/login.ejs");
}
module.exports.login = async(req,res) =>{
    req.flash("success","Welcome to Wanderlust, Login Successful!");
    let orUrl = res.locals.redirectUrl ||"/listing";
    res.redirect(orUrl);
}
module.exports.logout = (req,res,next) =>{
    req.logout((err) =>{
        if(err){
           return next(err);
        }
        req.flash("success" ,"Logged Out Successfully!");
        res.redirect("/listing");
    })
}