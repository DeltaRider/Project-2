var express = require('express');
var app = express();
var path = require("path");

app.use(express.static("public"));

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'dummy_games_db'
});
 
connection.connect();

app.get('/scores', function(req, res){
	connection.query('SELECT * FROM scores', function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.get('/allscoresh', function(req, res){
	connection.query(`SELECT * FROM scores WHERE (game = 'HoodRap Hangman') ORDER BY score DESC`, function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.get('/allscoresd', function(req, res){
	connection.query(`SELECT * FROM scores WHERE (game = 'dookemon') ORDER BY score DESC`, function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.get('/dkmlead', function(req, res){
	connection.query(`SELECT * FROM scores WHERE (game = 'dookemon') ORDER BY score DESC LIMIT 6`, function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});

app.get('/hrhlead', function(req, res){
	connection.query(`SELECT * FROM scores WHERE (game = 'HoodRap Hangman') ORDER BY score DESC LIMIT 6`, function (error, results, fields) {
	  if (error) res.send(error)
	  else res.json(results);
	});
});
 
app.listen(3000, function(){
	console.log('listening on port ' + 3000)
})