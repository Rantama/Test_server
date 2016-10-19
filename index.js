//Dependencies
var express =require('express');
var bodyParser = require ('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
//Endpoint dependencies
var products = require('./api/products')
//Esxpress app
var app = express();

//MongoDB connection
mongoose.connect('localhost', 'testProducts');

mongoose.connection.on('error', function(e) {
  console.log(err);
})

//Middleware
app.use(morgan('dev'));
app.use(express.static('client'));
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

// app.use(function (req, res, next) {
//   if (req.body.token == "today is monday") {
//     next();
//   }else {
//
//   next({
//     status:401,
//     message: "Auth Error"
//   });
//   }
//
// })

//Router
app.use('/products',products )

//Default Router
app.use('/', function (reg, res, next){
  //reg stands for request
    // The request object
  //res for response
    //The response object
  res.sendFile(__dirname+ "/client/index.html")

})
//Error handler

app.use(function(err, req, res, next) {
  res.status(err.status).send(err.message);
})

//Create Server
app.listen(3000, function() {
  console.log("the server is running, http://localhost:3000")
})
