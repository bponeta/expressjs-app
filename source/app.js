var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('DevOps - Strona startowa!');
	console.log('Zażądano strony Start');
});

app.get('/users', function(req, res){
	res.send('DevOps - strona Users!');
	console.log('Zażądano strony Users');
});
app.get('/services', function(req, res){
	res.send('DevOps - strona services!');
	console.log('Zażądano strony services');
});

app.listen(3001, function(){
	console.log('Aplikacja OK');
}); 