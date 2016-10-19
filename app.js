var http=require('http')
var express = require('express');
var app = express();
var path=require('path');
var bodyParser = require('body-parser')  
var enterdname;
var enterdpasswrd;
var s1;
var s2;
var s3;
var s4;
var blog;
app.use(express.static(path.join(__dirname, '/public'))); 
// app.use(express.static(__dirname + '/static'));

//routing Part
app.get('/', function (req, res) {
   res.sendFile(__dirname+'/index.html'); 
}); 
app.get('/signin', function (req, res) {
   res.sendFile(__dirname+'/signin.html'); 
}); 
app.get('/index', function (req, res) {
   res.sendFile(__dirname+'/index.html'); 
}); 
app.get('/login', function (req, res) {
   res.sendFile(__dirname+'/login.html'); 
});
app.listen(2000, function () {
  console.log('Server Running at port 2000!');
});
 app.use(bodyParser.urlencoded({
    extended: true
}));


//mongo client

 var mongo=require('mongodb');
var mongoClient=mongo.MongoClient;
var url="mongodb://kichu:kl01aa35@ds029297.mlab.com:29297/data";
mongoClient.connect(url,function(err,db){
  console.log("Welcome to MongoClient...");
  var uc=db.collection("color"); 
  var ucc=db.collection('color1');
app.post('/login',function(Req,Res){
	 enterdname=Req.body.signupname;
	 enterdpasswrd=Req.body.signuppassword;
	 uc.insert({username:enterdname , password: enterdpasswrd});
 ucc.insert({para:"For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."});
	console.log(enterdpasswrd+ enterdname);
	// Res.redirect('/index');	 
	uc.find({username:enterdname,password:enterdpasswrd}).toArray(function(err,docs){
		console.log(docs);
		if(docs.length==0){
			console.log("please signup");
			Res.redirect("/login");
		}
		else{
			console.log("username exists");
			Res.redirect("/signin");
		}
		uc.find({username:enterdname,password:enterdpasswrd}).toArray(function(err,docs){
		console.log(docs);
		if(docs.length>0){
			console.log("Existing User");
			Res.redirect("/index");
		}
		else{
			console.log("username exists");
			Res.redirect("/signin");
		}
	}); 
})
})   
app.post('/log',function(Req,Res){ 
	 s=Req.body.l1;
	 s1=Req.body.l2;
	 s2=Req.body.l3;
	 s3=Req.body.l4;
	uc.find().toArray(function(err,docs){
blog=docs;
		console.log(blog);
		
	}); 
})
}) 