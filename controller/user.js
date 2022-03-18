const Volunteers = require('../models/user');
module.exports.renderRegister = async(req,res)=>{
    res.render('users/signup');
    }
module.exports.Register = async(req,res,next)=>{
    try{
    const{username,email,password,Location,age,isWillingToVolunteer,Occupation}=req.body ;
    console.log(age);
    const Volunteer = new Volunteers({username,email,Location,age,isWillingToVolunteer,Occupation});
    console.log(Volunteer);
    const newVolunteer = await Volunteers.register(Volunteer,password);
    req.login(newVolunteer,function(err){
        if(err){
            return next(err);
        }
        req.flash('success','Welcome');
        res.redirect('/campgrounds')
    })
   }
    catch(e){
        req.flash('error',e.message);
        res.redirect('/register')
    }
}
module.exports.renderLogin = (req,res)=>{ 
    res.render('users/signin');
}
module.exports.Login = async(req,res)=>{
    req.flash('success','Welcome Back');
    const redirect = req.session.returnTo || '/campgrounds';
    delete req.session.returnTo ; 
    res.redirect(redirect);
}
module.exports.Logout = (req,res)=>{
    req.logout();
    req.flash('success','GoodBye');
    res.redirect('/campgrounds');
}

