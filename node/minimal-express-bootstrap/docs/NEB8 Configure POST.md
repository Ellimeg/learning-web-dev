# NEB8 Configure POST

Middleware for parsing the most common request bodies is built into Express >= 4.16.0 .So there is no need to install 3rd party middleware like [body-parser](https://www.npmjs.com/package/body-parser)

 Use **express.json()** and **express.urlencoded()** to deal with the (incoming) data (object) in the body of the request.

 You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are **sending data** (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request

| express.json()       | is a method inbuilt  in express to recognize the incoming Request Object as a **JSON Object**.   This method is  called as a middleware in your application using the code: app.use(express.json()); |
| -------------------- | ------------------------------------------------------------ |
| express.urlencoded() | is a method  inbuilt in express to recognize the incoming Request Object as **strings or arrays**. This method  is called as a middleware in your application using the code: app.use(express.urlencoded());   The extended options is used to toggle between the qs (when true)  and querystring (when false) libraries.   qs allows  for rich objects and arrays to be encoded, querystring does not.  Keep this as false for simple forms (all key-value pairs)  and true when you’re sending arrays/maps of values. |

1. Add body-parsing middleware to     app.js **BEFORE routing**:

Adding it after will give the error message "undefined" if you try and access the request body.

| app.js                                                       |
| ------------------------------------------------------------ |
| // Require express to make easy   routing on server side.<br /> const express = require('express');<br /><br />// Creating express object<br />const app = express();<br /><br />// Require path module<br />const path = require('path');<br /><br />// Require cors<br />const cors = require('cors');<br />app.use(cors());<br /><br />// Occurs before routing:<br />// Middleware for parsing application/json<br />app.use(express.json())<br />// Middleware for parsing application/x-www-form-urlencoded<br />app.use(express.urlencoded({extended:false}));<br /><br />// Handling routing<br />const index = require('./routes/index');<br />app.use(index);<br />const users = require('./routes/users');<br />app.use('/api/users', users);<br /><br />// Using Express there is no need to require('pug').<br />// Instead set the view engine property of Express app to pug .<br />app.set('view engine', 'pug');<br />// Set the view directory so that Express knows where to look for pug files (for compilation\rendering.<br />app.set('views', path.join(__dirname, 'views'));<br /><br /> module.exports = app; |

 A more detailed implementation producing the same result as above:![neb8.1](.\images\neb\neb8.1.JPG)

Update **users.js** post method, adding logging of the request body to the console:

router.post('/', (req, res) => {
	console.log(req.body); 
	return res.send('POST HTTP method on user resource');
});

Posting data via http://localhost:3000/api/users/register (enter values and click Submit) will give something like this in the console:

{ name: 'Homer Simpson', email: 'spiderpig@gmail,com'}

 For more info see: https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms