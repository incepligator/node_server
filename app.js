var express  = require('express');
var app = express();
var portNumber = 3000;

app.get('/', function(req, res, next){
    res.send('<h1>Hello World<h1>');
})

app.get('/books', function(req, res , next){
    res.json({
        "name":"Harry Potter",
        "price": 123.45
    });
})


app.get('/sendfile', function(req, res , next){
    
    console.log(__dirname);
    
    res.sendFile(__dirname+"/public/index.html");
})

app.get('/aurthur',function(req, res , next){
    
    console.log(req.query.age);
    res.send("<h1>" + req.query.age +" "+ req.query.name +" " + req.query.address +
             "</h1>");
  
})

app.get('/cars/:id',function(req, res , next){
    
    res.send("<h1>" + req.params.id +" </h1>");
  
})

app.get('/cars/:id/:price/:address',function(req, res , next){
    
    res.send("<h1>" + req.params.id +" " + req.params.price + " "+ req.params.address +"</h1>");
  
})



app.listen(portNumber, function(req, res, next){
    console.log('server starting at port number ' + portNumber);
})
