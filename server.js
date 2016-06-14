var Express = require ("express");
var bodyParser = require("body-parser")
var app = new Express ();

var TheBP = bodyParser.json();
app.use(TheBP)



app.use(function(req, res, next){
  // console.log("got a request");
  // console.log(req.path)
  // console.log(Object.keys(res))
  // if(req.path === "/kitten"){
  // res.send ("KITTENS!!")
  // } else {
  //   res.send ("no kittens...")
  // }

  //throw Error("theres a problem")
  // console.log("in 0 middleware")
  setTimeout(function(err){
    if(err) next(err)
      else {
        next();
      }
    console.log("done working 0 middleware")
     next();
  }, 1000)

  //res.json({name: "john", height:180})

//   console.log("heard req: ", req.path)
// res.send("this is a string")
// next();
//      });

// app.use(function(req,res,next){
//   console.log("nowin first middleware function")
//   res.send("did it \n")
//   next();
// })

// console.log("heard req from user : " + req.method, req.path)
next();
});
//how to use routing?

app.get("/kittens", function(req, res, next){
  console.log("tryna get somthing?")
  res.send("take it meow")
})


app.get("/puppies", function(req, res, next){
  console.log("tryna get puppies??")
  res.send("bow wow")
  next();
})

app.post("/puppies", function(req, res, next){
  console.log("post ran")
  res.send("post ran")
  next();
})
//two ways to request info, req.body with body parser, or use the following
app.post("/puppies/:puppyName", function (req, res, next){
  console.log("params.puppy" , req.params.puppyName)
});

//another way of getting info from req

app.get("/puppies?type=corgi", function(req, res, next){
  req.query.type // corgi
  console.log("tryna get cogri??")
  res.send("corgi")
  next();
})

//needs to expressly tell express to move on to the next function
app.use(function (err, req, res, next){
  console.error("ERROR:", err)
  res.status(500).send("cant tell you why its broken!")
})
//start listning for http income request
app.listen(3000)
