// server.js
// load the things we need
require('dotenv').config()
var express = require('express');
var app = express();
var path = require('path');

// require pg connection pool
const pool = require('./lib/db');

// set the view engine to ejs
app.set('view engine', 'ejs');

// set views folder
app.set('views', path.join(__dirname, 'views/dist'));

// set static folder
app.use(process.env.iisnodeRoute + '/public', express.static(path.resolve('./public')))

/* routers */
var routerIndex = require('./routes/index');
var routerAbout = require('./routes/about');
var routerRecord = require('./routes/record');

/* set routes */
app.use(process.env.iisnodeRoute + '/', routerIndex);
app.use(process.env.iisnodeRoute + '/about', routerAbout);
app.use(process.env.iisnodeRoute + '/record', routerRecord);

app.listen(process.env.PORT);
