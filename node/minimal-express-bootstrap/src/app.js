// Require express to make easy 
// routing on server side. 
const express = require('express');

// Creating express object
const app = express();

// Require path module 
const path = require('path');

// Require cors
const cors = require('cors');
app.use(cors());

// Middleware for parsing application/json
//app.use(express.json()); // same as below with defualt options
app.use(express.json({
    inflate: true,
    limit: '100kb',
    reviver: null, // a function, this prescribes how the value originally produced by parsing is transformed, before being returned.
    strict: false,  // Enables or disables only accepting arrays and objects; when disabled will accept anything JSON.parse accepts.
    type: 'application/json', 
    verify: undefined // optional function with verify(req, res, buf, encoding) can be used to abort parsing by throwing an error.
  }))
// Middleware for parsing application/x-www-form-urlencoded 
//app.use(express.urlencoded({extended: false})); // same as below with defualt options
app.use(express.urlencoded({
    extended: false, // qs (when true - the default) for sending arrays/maps of values. and querystring (when false) for simple forms (all key-value pairs) 
    inflate: true,   // false = compressed/deflated bodies will get rejected
    limit: '100kb',  // maximum body size. It can be either a number of bytes or a string
    parameterLimit: 1000, // maximum number of fields that we’ll attempt to parse from the url encoded form body.
    type: 'application/x-www-form-urlencoded', // content-type the middleware will attempt to parse. Can be a string, an array of strings, or a function. 
    verify: undefined // where buf is a Buffer of the raw request body and encoding is the encoding of the request.
}));

// Handling routing AFTER middleware
const index = require('./routes/index');
app.use(index);

const users = require('./routes/users');
app.use('/api/users', users);

// Allows files to be loaded from a directory src/public
app.use(express.static('./src/public'));

// Using Express there is no need to require('pug').
// Instead set the view engine property of  Express app to pug .
app.set('view engine', 'pug');
// Set the view directory so that Express knows where
// to look for pug files (for compilation\rendering.
app.set('views', path.join(__dirname, 'views'));

module.exports = app;