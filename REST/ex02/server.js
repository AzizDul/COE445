var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//------------------------------------

var mongojs = require('mongojs');

var uri = "mongodb://localhost:27017/library";
var collection = ["books"];

var db = mongojs.connect(uri, collection);

//------------------------------------

app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static(__dirname));

//------------------------------------

// Routes
// Handlers for the REST APIs

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index1.html');
});

// List all books

app.get('/books', function(req, res){
	db.books.find({}, function(err, result){
		res.json(result);
	});
});

// Search for books of a specific author

app.get('/books/:author', function(req, res){
	//res.send(req.params.author);
	db.books.find({author: req.params.author}, function(err, result){
		res.json(result);
	});
});

//-----------------------------------------------------
// Same as above but using a query string

app.get('/find', function(req, res){
	//res.send(req.query.author);
	db.books.find({author: req.query.author}, function(err, result){
		res.json(result);
	});
});
//-----------------------------------------------------

app.listen(3000, function(){
	console.log('Server listening at port 3000!');
});