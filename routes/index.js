var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  var tweets = tweetBank.list(); // an array of object
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm:true } );
});

router.get("/user/:name", function (req ,res){
  var name = req.params.name
  var list = tweetBank.find({name:name})
  res.render ('index',{ title: 'Twitter.js - Posts by '+name, tweets: list, showForm:true, userName: req.params.name  } )
    })


router.get("/tweets/:id", function (req ,res){
  var id = req.params.id
  var list = tweetBank.find({id:id})
  res.render ('index',{ title: 'Tweet ID #' + id, tweets: list } )
    })


router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
