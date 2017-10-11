var http = require('http');
var express = require('express');
var twilio = require('twilio');

var app = express();

app.post('/voice', function(req,res){
	var twiml = new twilio.TwimlResponse();
	twinl.say('Office 2 is under fire please evacuate through staircase 2. Avoid Going towards conference room and staricase 1, it might be dangerous.');
	res.writeHead(200, {'Content-type':'text/xml'});
	res.end(twiml.toString());
});

http.createServer(app).listen(1337, function(){
	console.log('Express Srever listening on port 1337');
});