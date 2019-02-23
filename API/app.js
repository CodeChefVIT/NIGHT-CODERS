//libraries
var express = require('express');
var app = express();
var http = require("http")
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

//require routes
var imgapi=require("./routes/imgapi");
var auth=require("./routes/auth");
var protectedrts=require("./routes/protectedrts");
var food=require("./routes/food");
var recordops=require("./routes/recordops");

//models and databaseconnect
var User=require("./models/user");
var Records=require("./models/records");

// mongoose.connect("mongodb://localhost:27017/newapi",{ useNewUrlParser: true });
mongoose.connect("mongodb://user23:user23@ds155164.mlab.com:55164/unimed",{ useNewUrlParser: true });

//jwt auth requirements and error shit
var options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
options.secretOrKey = '7x0jhxt"9(thpX6'
app.use(passport.initialize());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
passport.use('local', new LocalStrategy(User.authenticate()));
passport.use('jwt', new JwtStrategy(options, function(jwt_payload, done) {
  User.findOne({
    _id: jwt_payload.id
  }, function(err, user) {
    if (err) {
      console.log(err)
    }
    if (user) {
      done(null,user);      
      //console.log(user);
    } else {
      done(null,false);
      console.log("okay");
    }
  })
}))


//routes
app.use("/",imgapi);
app.use("/",auth);
app.use("/",protectedrts);
app.use("/",food);
app.use("/recordops",recordops);

//server stuff
var server = http.createServer(app);
var port = process.env.PORT||3000;
app.set('port', port);
server.listen(port);