var express  = require('express');
var app = express();
var portNumber = 3000;

app.use("/",express.static(__dirname+"/public/"));
app.set("views",__dirname+"/views/");




var expresshandle= require('express-handlebars');


var hbs= expresshandle.create({defaultLayout:'main',
                               layoutsDir:__dirname+'/views/layouts',
                              partialsDir:__dirname+'/views/partials/',
                              extname:'hbs'});


app.engine("hbs",hbs.engine);
app.engine("html",hbs.engine);


app.set("view engine","hbs");








app.get('/handle', function(req, res, next){
    
    
    console.log("render working");
    
    res.render("main",{
        
        body:"Salmankhan",
        title:"hero"
    });
    
    
})


app.get('/helloworld', function(req, res, next){
    res.send('<h1>Hello World<h1>');
})


app.get('/books', function(req, res , next){
    res.json({
        "name":"Harry Potter",
        "price": 123.45
    });
})


app.get('/', function(req, res , next){
    
    res.sendFile(__dirname+"/public/index.html");
})


app.get('/index', function(req, res , next){
    
    res.sendFile(__dirname+"/public/index.html");
})

app.get('/about', function(req, res , next){
    
    res.sendFile(__dirname+"/public/about.html");
})

app.get('/contact', function(req, res , next){
    
    res.sendFile(__dirname+"/public/contact.html");
})

app.get('/gallery', function(req, res , next){
    
    res.sendFile(__dirname+"/public/gallery.html");
})

app.get('/service', function(req, res , next){
    
    res.sendFile(__dirname+"/public/service.html");
})

app.get('/single-portfolio', function(req, res , next){
    
    res.sendFile(__dirname+"/public/single-portfolio.html");
})

app.get('/single-post', function(req, res , next){
    
    res.sendFile(__dirname+"/public/single-post.html");
})

app.get('/blog-right-sidebar', function(req, res , next){
    
    res.sendFile(__dirname+"/public/blog-right-sidebar.html");
})


app.get('/blog-left-sidebar', function(req, res , next){
    
    res.sendFile(__dirname+"/public/blog-left-sidebar.html");
})

app.get('/blog-fullwidth', function(req, res , next){
    
    res.sendFile(__dirname+"/public/blog-fullwidth.html");
})

app.get('/about', function(req, res , next){
    
    res.sendFile(__dirname+"/public/about.html");
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
