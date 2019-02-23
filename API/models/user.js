var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Records = new mongoose.Schema({
    timestamp:String,
    totalcal:Number,
    totalfat:Number,
    totalcarbs:Number,
    totalprot:Number,
    cigsmoke:Number,
    alcoholglass:Number,
    calburnt:Number
});

var User = new mongoose.Schema({
    username:String,
    password:String,
    name:String,
    DOB:String,
    height:Number,
    weight:Number,
    totalrat:Number,
    avgrat:Number,
    records:[Records]
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);                   