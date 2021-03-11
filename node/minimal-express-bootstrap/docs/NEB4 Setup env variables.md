# NEB4 Setup environment variables

**ENVIRONMENT VARIABLES IN NODE.JS**

We need a place for private API keys and user credentials like password, username, and email as environmental variables, but without exposing them in the source code. 

1. Create a .env file in the project root (in visual studio code files that start with a "." get a  cog symbol) where you can place any key value pair that you don't want in your source code:
![neb4.1](.\images\neb\neb4.1.JPG)

2. Install & use [dotenv](https://github.com/motdotla/dotenv) to make environmental  variables accessible in the source code. 
   2.1  Install as a normal dependency:
   
      **npm install dotenv --save**
   
   2.2. Include the dotenv configuration data using "require" in the src/index.js file to initialize it:![neb4.2](\images\neb\neb4.2.JPG)

**Note:** JavaScript module is any file that contains a few lines of code written in JavaScript. They are the same as JavaScript Libraries. Modules often contain a class or a library of functions that are used for a specific purpose. These can be called with the help of [require] and [import] statements.
![neb4.1](.\images\neb\neb4.3.JPG)

Always put the dotenv initialization before the local file imports.