var mongoose = require('mongoose');

var Records = new mongoose.Schema({
    timestamp:String,
    bdesc:String,
    bcalories:Number,
    bfat:Number,
    bprotein:Number,
    bcarbs:Number,
    ldesc:String,
    lcalories:Number,
    lfat:Number,
    lprotein:Number,
    lcarbs:Number,
    ddesc:String,
    dcalories:Number,
    dfat:Number,
    dprotein:Number,
    dcarbs:Number,
    totalcal:Number,
    totalfat:Number,
    totalcarbs:Number,
    totalprot:Number,
    cigsmoke:Number,
    alcoholglass:Number,
    calburnt:Number
});

module.exports = mongoose.model('Records', Records);