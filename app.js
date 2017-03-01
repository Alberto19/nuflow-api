'use strict'
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let methodOverride = require('method-override');
let cors = require('cors');
let mongoose = require('mongoose');
let config = require('./config');
let morgan = require('morgan');
let routes = require( './src/router/index');

let http = require('http').Server(app);
let io = require('socket.io')(http);

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use(methodOverride('Access-Control-Allow-Origin', '*'));
app.use(methodOverride('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'));
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

app.use('/',routes);


http.listen(config.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on port 3001");
    }
});

module.exports = app;