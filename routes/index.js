var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');
var app = new express ();

router.get('/', function (req, res) {
  var tweets = tweetBank.list(); // an array of object
  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm:true } );

});

router.get("/user/:name", function (req ,res){
  var name = req.params.name
  var list = tweetBank.find({name:name})
  res.render ('index',{ title: 'Twitter.js - Posts by '+name, tweets: list } )
    })


router.get("/tweets/:id", function (req ,res){
  var id = req.params.id
  var list = tweetBank.find({id:id})
  res.render ('index',{ title: 'Tweet ID #' + id, tweets: list } )
    })

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   //res.end(JSON.stringify(req.body, null, 2))
// })


router.post('/tweets', function(req, res) {
  console.log(req.body)
  // var name = req.body.name;
  // var text = req.body.text;
  // tweetBank.add(name, text);
  // res.redirect('/');
});

module.exports = router;
