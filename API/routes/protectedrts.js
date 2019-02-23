var router=require("express").Router();
var isLoggedIn=require("./middleware")
var extractid=require("./extract");
var User=require("../models/user");

router.get('/curuser',isLoggedIn,function (req, res, next) {
  var x=extractid(req.headers);
  User.findById(x.body.id,function(err,found){
    if(err)
    console.log(err);
    else
    res.json(found);
  });
});

router.get("/protected2",isLoggedIn,function(req,res,next){
  res.json({fuck:'You'})
});

module.exports=router;