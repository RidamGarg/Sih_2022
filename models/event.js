const mongoose = require('mongoose');
const Schema = mongoose.Schema ;
const eventSchema = new Schema({
    Location:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    Radius:{
        type:Number,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('event',eventSchema);