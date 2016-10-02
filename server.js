var express=require("express");

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var routes = require('./app/routes/index.js');
var api = require('./app/api/api.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/html', express.static(process.cwd() + '/html'));
    
var port = process.env.PORT || 8080;        // set our port
    
// The format follows as, alias to use for real path, also allows permission to such path.
//app.use('/api', express.static(process.cwd() + '/app/api'));
    
routes(app);
api(app);

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});