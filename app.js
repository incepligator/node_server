var express  = require('express');
var app = express();
var portNumber = 3000;
app.use("/", express.static(__dirname + "/public/"));
app.set("views", __dirname + "/views/");
var expresshandle = require('express-handlebars');
var hbs= expresshandle.create({
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials/',
    extname: 'hbs'
});
app.engine("hbs", hbs.engine);
app.engine("html", hbs.engine);
app.set("view engine", "hbs");

require('./routes/index')(app);

app.listen(portNumber, function(req, res, next){
    console.log('server starting at port number ' + portNumber);
});
