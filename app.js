var Express = require ("express");
var swig = require("swig");
var app = new Express ();



 // app.engine("html", swig.renderFile)
 // app.set('view engine', 'html');
 // app.set('views', '/views/index.html');

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};




// app.use(function(req, res, next){
//   console.log(req.method, req.path)
//   console.log(res.statusCode)
//   next();
// })

app.get("", function(req, res, next){
  var output =  swig.renderFile('./views/index.html', locals, function (err, output){
 if(err) next(err)
      else {
          res.set('Content-Type', 'text/html');
          res.send(output)
      }
      next()
});

// next();
})


// app.use("/special/", function(req, res, next){
//   res.send("you reached the special area ")
// next();
// })





app.listen(3000, function (){
  console.log("server listening")
})

