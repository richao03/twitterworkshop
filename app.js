var Express = require ("express");
var swig = require("swig");
var routes = require('./routes/');
var app = new Express ();




 app.engine("html", swig.renderFile);
 app.set('view engine', 'html');
 app.set('views', './views');
 swig.setDefaults({ cache: false });

app.use('/', routes);
app.use(Express.static('public'));

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.get("", function(req, res, next){
  // var output =  swig.renderFile('./views/index.html', locals, function (err, output){
  // if(err) next(err)
  //     else {
  //         res.set('Content-Type', 'text/html');
  //         res.render( './views/index.html', {title: 'Hall of Fame', people: people} );
  //     }
      // res.set('Content-Type', 'text/html');
      res.render( 'index.html', locals);
      // next()
});

// next();
// })


// app.use("/special/", function(req, res, next){
//   res.send("you reached the special area ")
// next();
// })





app.listen(3000, function (){
  console.log("server listening")
})

