var express = require ("express");
var swig = require("swig");
var app = new Express ();

// app.get("/", function(req, res, next){
//   res.send("welcome ")
// next();
// })

app.engine("html", swig.renderFile)
app.set('view engine', 'html');
app.set('views', '/views/index.html');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

swig.renderFile('./views/index.html', locals);


app.use(function(req, res, next){
  console.log(req.method, req.path)
  console.log(res.statusCode)
  next();
})


app.use("/special/", function(req, res, next){
  res.send("you reached the special area ")
next();
})





app.listen(3000, function (){
  console.log("server listening")
})

