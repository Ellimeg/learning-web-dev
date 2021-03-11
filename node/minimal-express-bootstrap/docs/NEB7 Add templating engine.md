# NEB7 Add templating engine

Returning hard coded inline response from within the route handler is all well and good, but it’s not very extensible.

 **Use a templating engine:** At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.

 Using the [pug templating engine](https://pugjs.org/): Pug (formerly known as Jade) comes with its own **indentation-sensitive** syntax for writing dynamic and reusable HTML. ([A Beginner’s Guide to Pug](https://www.sitepoint.com/a-beginners-guide-to-pug/)).

 **Objective**: Define template files and tell our routes to use them instead of writing everything inline

1. Add a file named **form.pug** to the views folder with the     following code: 

| form.pug                                                     |
| ------------------------------------------------------------ |
| form(action="." method="POST")<br />      label(for="name") Name:<br />      input(<br />          type="text"<br />          id="name"<br />          name="name"<br />       )<br />       label(for="email") Email:<br />       input(<br />           type="email"<br />           id="email" <br />          name="email"<br />      )<br />     input(type="submit"  value="Submit") |

2. Install pug as a dependency and integrate it into express app.
	2.1 execute **npm install pug** (type ctrl + C to stop nodemon)

	2.2 update app.js to use pug and look for templates inside views folder. 

	Comments added to remind of previous steps:

| app.js                                                       |
| ------------------------------------------------------------ |
| // Require express to make easy  routing on server side. <br />  const express = require('express');<br />  <br />// Creating express object<br />const app = express(); <br />  <br />// Require path module<br />const path = require('path');<br /> <br />// Require  cors and use<br />const cors = require('cors');<br /> app.use(cors()); <br /><br />// Handling routing<br />const index = require('./routes/index');<br />app.use(index);<br /> const users = require('./routes/users');<br />app.use('/api/users', users); <br /><br />// Using Express there is no need to require('pug').<br /<br />// Instead set the view engine property of Express app to pug<br /> app.set('view engine', 'pug'); <br />// Set the view directory so that Express knows where  to look for Pug files (for compilation\rendering).<br /> app.set('views', path.join(__dirname, 'views')); <br /><br />module.exports = app; |

Where:

| **path**                              | **is Node.js native  utility module. you don't need to install it because it's already inside  Node.js. It provides utilities for  working with file and directory paths. This module allows us to build the  path to our views folder using the two below.** |
| ------------------------------------- | ------------------------------------------------------------ |
| path.join                             | returns a normalized  path by merging two paths together.    |
| __dirname                             | returns the directory in which the  currently executing script resides |
| express  .urlencoded({extended:true}) | Syntax: express.urlencoded(  [options] )     The options  parameter contains various property like extended, inflate, limit, verify  etc. |

 2.3 Add a second GET route in users.js to use the template

 router.get('/register', (req, res) => {
        res.render('form', { title: 'User Registration' });
 });  

 2.4 Save all and view in browser:
 ![neb6.4](.\images\neb\neb7.1.JPG)

Use F12 to inspect html. Express only sent the HTML for the form: our page is missing a doctype declaration, as well as a head and body section. 

3. To create these create a **layout.pug** file in the views folder and add the following code:

![neb6.5](.\images\neb\neb7.2.JPG)

Note:
(1) the line starting title=. Appending an equals sign to an attribute is one of the methods that Pug uses for interpolation. Read more about it [here](https://pugjs.org/language/interpolation.html). We’ll use this to pass the title dynamically to each template.

(2) the line that starts with the **block** keyword. In a template, a block is simply a “block” of Pug that a child template may replace. (For more info on its use see [this page on the Pug website](https://pugjs.org/language/inheritance.html).

3.2 Alter **form.pug** to use the layout: 

| form.pug                        |
| ------------------------------- |
| ![neb](.\images\neb\neb7.3.JPG) |

 **NOTE : I repeat!!! pug is indent sensitive, copy exactly**

 And in **routes/index.js**, pass in an appropriate title for the template to display:
 ![neb6.7](.\images\neb\neb7.4.JPG)

(remember, layout.js contains the line : title= `${title}`) 

render is using 'form' which points to a file located at views/form.pug
The pointing is set by the app.set("views") option) in app.js.
Save all and view in browser:
![neb6.8](.\images\neb\neb7.5.JPG)
Note: Test Submit using incognito windows:

With the basic post response present in users.js:

router.post('/', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

Clicking submit gives the following in the browser:

![neb7.6](.\images\neb\neb7.6.JPG) 

Commenting out the basic post response will display an error as now there is nothing to handle POST requests![neb7.7](.\images\neb\neb7.7.JPG)
