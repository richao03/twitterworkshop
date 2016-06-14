var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list(); // an array of object
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
  console.log(tweets)
});

router.get("/user/:name", function (req ,res){
  var name = req.params.name
  var list = tweetBank.find({name:name})
  res.render ('index',{ title: 'Twitter.js - Posts by '+name, tweets: list } )
    })

module.exports = router;
