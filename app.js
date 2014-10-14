var fs = require('fs');
var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	fs.readFile('data.txt', function(err, data){
		// var fileContents = fs.readFileSync('data.txt');
		res.header('Content-Type', 'text/html');
		res.send(data);
  		// do something with data here
	});	
});

app.get('/:filename', function(req, res) {
	// access value of :filename with req.params.filename
	var file = req.params.filename;
	// read the file with the specified filename
	fs.readFile(file, function(err, data){
		res.send(data);
	});
	// send the contents of the file to the user
});

var server = app.listen(3058, function() {
	console.log('Express server listening on port ' + server.address().port);
});
