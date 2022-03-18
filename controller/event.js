const Events = require('../models/event');

module.exports.renderEvent = (req,res)=>{
    res.render('events/form');
}
module.exports.addNewEvent = async(req,res,next)=>{
 
    const{Location,Time,Radius,Description}=req.body ;
    console.log(Time);
    const Event = new Events({Location,Time,Radius,Description});
   // console.log(Event);
    await Event.save();
   res.send(Event);
}

