//create web server

var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(req, res) {
	var path = url.parse(req.url).pathname;
	var filePath = __dirname + path;

	fs.exists(filePath, function(exists) {
		if(exists) {
			fs.readFile(filePath, function(err, data) {
				res.end(data);
			});
		} else {
			res.statusCode = 404;
			res.end("404 not found");
		}
	});
});

server.listen(8080, function() {
	console.log("Server is listening on port 8080");
});