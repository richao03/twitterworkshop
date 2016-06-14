var Express = require ("express");
var app = new Express ();

// app.get("/", function(req, res, next){
//   res.send("welcome ")
// next();
// })





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
