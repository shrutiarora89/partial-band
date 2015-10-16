'use strict';

//other file u have created.
var express = require('express');
var app = express();

var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

//storing the funcionality into variables
var getRandomWord = require('./lib/getRandomWord.js');
var Adjective = require('./lib/adjective.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');

//storing the server port in a variable
var port = process.env.PORT || 3000;

//telling the server that we have directory of app
app.use(express.static(__dirname + '/app/'));

//this will start the server
app.listen(port, function() {
  console.log('server starting. available at http://localhost:' + port);
});

//send the index file to the server
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

var postWord = function(word, object) {
  object[word] = true;
};

/**** creating ADJECTIVES instances****/
var adjectives = new Adjective();

//retrive from the server adjective words
app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjectives));
});

//if the word is adjective then post adjective
app.post('/adjective', function(req, res) {
  var word = req.body.word;
  if (word) {
    postWord(word, adjectives);
    console.log(adjectives);
    res.send("Added " + word + " to list of adjectives");
  }

});

/********************/

/**** creating NOUNS instances ****/
var nouns = new Noun();

//retrive from the server noun words
app.get('/noun', function(req, res) {
  res.json(getRandomWord(nouns));
});

//if the word is noun then post noun
app.post('/noun', function(req, res) {
  var word = req.body.word;
  if (word) {
    postWord(word, nouns);
    res.send("Added " + word + " to list of nouns");
  }
});

/********************/

/**** creating VERBS instances****/
var verbs = new Verb();

//retrive from the server verb words
app.get('/verb', function(req, res) {
  res.json(getRandomWord(verbs));
});

//if the word is verb then post verb
app.post('/verb', function(req, res) {
  var word = req.body.word;
  if (word) {
    postWord(word, verbs);
    console.log(adjectives);
    res.send("Added " + word + " to list of verbs");
  }
});
/********************/

