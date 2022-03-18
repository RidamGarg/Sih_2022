module.exports.renderEvent = async(req,res)=>{
    res.render('events/form');
}
module.exports.addNewEvent = async(req,res)=>{
res.send(req.body);
}