var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//------------------------------------

var mongojs = require('mongojs');

var uri = "mongodb://localhost:27017/books";
var db = mongojs.connect(uri, ["science", "engineering"]);

//------------------------------------

app.use(bodyParser.urlencoded({extended: true}));

//------------------------------------

app.get('/', function(req, res){
	res.send('Hello!!');
});

app.get('/books/science', function(req, res){
	db.science.find({}, function(err, result){
		res.json(result);
	});
});

app.get('/books/engineering', function(req, res){
	db.engineering.find({}, function(err, result){
		res.json(result);
	});
});

// For this URL http://localhost:3000/books/engineering?author=ashraf , you should map it 
// to a format the express framework can understand

//app.get('/books/engineering?author=ashraf', function(req, res){
//	res.send(req.query.author);
//});

app.listen(3000, function(){
	console.log('Server listening at port 3000!');
});