var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  
  res.sendFile('index.html');
  
});

app.listen(8000);

console.log('Server running at port 8000');