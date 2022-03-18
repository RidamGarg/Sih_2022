const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const VolunteerSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    Location:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    isWillingToVolunteer:{
        type:String,
        required:true
    },
    Occupation:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
   
})
VolunteerSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('Volunteers',VolunteerSchema);