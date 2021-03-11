# NEB6 Add Routing

**Objectives**: 
Create an API using router. The API is created separately to demonstrate modularity.
Refactoring.

Create a src\\**routes** folder 
Create new file route\\**users.js**
Move index.js file into the  **routes** directory
Create a src\\**views** folder
Create a src\\**app.js** file and a src\\**start.js** file

1. Update package.json to use start.js and save changes
   ![neb5.2](.\images\neb\neb6.1.JPG)

2. Move users routing from index.js to users.js and refactor as shown:

   | users.js                                                     |
   | ------------------------------------------------------------ |
   | const express = require('express');<br />const router = express.Router(); <br /><br />router.get('/', (req, res) => {<br />    return res.send('GET HTTP method on user resource');<br />  }); <br />router.post('/', (req, res) => { <br />   return res.send('POST HTTP method on user resource');<br />  });<br /> router.put('/:userId', (req, res) => {<br />    return res.send(`PUT HTTP method on user/${req.params.userId} resource`,    );<br />  });<br /> router.delete('/:userId', (req, res) => {<br />    return res.send(`DELETE HTTP method on user/${req.params.userId} resource`,    );<br />  });<br /><br />module.exports = router; |

   Note: in order to use in line values **use the back-tick instead of the single quote** for PUT and DELETE

3. Refactor index.js as shown:

   | index.js                                                     |
   | ------------------------------------------------------------ |
   | const express = require('express');<br />const router = express.Router();<br /><br />router.get('/', (req, res) => {<br />    return res.send('Node Express Demo App');<br />});<br /><br />router.get('/api', (req, res) => {<br />    return res.send('API Page');<br />});<br /><br />module.exports = router; |

When var app = express() is called, an app object is returned. Think of this as the **main app**.

When var router = express.Router() is called, a slightly different **mini app** is returned. 

The idea behind the **mini app** is that each route in your app can become quite complicated, and you benefit from moving all that code into a separate file. Each file's router becomes a **mini app**, which has a very similar structure to the **main app**. 

Because we have split the code between various files, note the final line: **module.exports = something;** 

**Module exports** are the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “**export**” from a given file so other files are allowed to access the **exported** code.

4. Move code for accessing env variables and starting the express app into start.js:

   | start.js                                                     |
   | ------------------------------------------------------------ |
   | require('dotenv').config();<br />const app = require('./app');<br /><br />console.log('Hello Demo');<br />console.log(process.env.MY_SECRET);<br /><br />const server = app.listen(process.env.PORT, () => {<br />    console.log(Example app listening on port ${ process.env.PORT}!\);<br />}); |

5. Save everything (run npm start if stopped) and nodemon should execute without errors
   
6. Check in browser:
      ![neb5.2](.\images\neb\neb6.3.JPG)

   Further reading: [Express routing (expressjs.com)](https://expressjs.com/en/guide/routing.html)