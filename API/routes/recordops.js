var router=require("express").Router();
var isLoggedIn=require("./middleware")
var extractid=require("./extract");
var User=require("../models/user");
var Records=require("../models/records");
var moment=require("moment");

router.post('/add',isLoggedIn,function(req,res){
    var x=extractid(req.headers);
    var obj=req.body;

    var record=new Records({
        timestamp:new Date().toLocaleDateString('en-GB', {day : 'numeric',month : 'numeric',year : 'numeric'}),
        totalcal:obj.totalcal,
        totalcarbs:obj.totalcarbs,
        totalfat:obj.totalfat,
        totalprot:obj.totalprot,
        cigsmoke:obj.cigsmoke,
        alcoholglass:obj.alcoholglass,
        calburnt:obj.calburnt
    });

    Records.create(record,function(err,newrec){
        if(err)
        console.log(err);
        else
        {
            console.log(newrec);
            User.findById(x.body.id,function(err,found){
                if(err)
                console.log(err);
                else
                {
                    found.records.push(newrec);
                    var xx=new Date(found.DOB);
                    var age=moment(new Date()).diff(xx,'years');

                    var y = parseInt(age) * 0.2;
                    var bmi = parseInt(found.weight) / (parseInt(found.height) * 0.01 * parseInt(found.height) * 0.01);
                    var cal = (parseInt(newrec.totalcal) - parseInt(newrec.calburnt)) * 0.5;
                    var fc = (parseInt(newrec.totalfat) + parseInt(newrec.totalcarbs)) * 0.2;
                    var p = parseInt(newrec.totalprot) * 0.1;
                    var alc = ((parseInt(newrec.alcoholglass) * 175) / 50) * 0.3;
                    var ci = parseInt(newrec.cigsmoke) * 0.3;
                    var heartrisk = (y + bmi + cal + fc - p + alc + ci) / 212;

                    found.totalrat=found.totalrat+Math.round(heartrisk);
                    found.avgrat=Math.round(found.totalrat/found.records.length);

                    User.findByIdAndUpdate(x.body.id,found,function(err,foundm){
                        if(err)
                        console.log(err)
                        else
                        res.json(foundm);
                    });
                
                }
            });
        }

    });
});

router.get('/disp',isLoggedIn,function(req,res){
    var x=extractid(req.headers);
    var dategiv=req.body.dategiv;
    Records.findOne({timestamp:dategiv},function(err,found){
        if(err){res.json("Record not found");}
        else{res.json(found);}
    });
});

module.exports=router;