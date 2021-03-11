# **NEB1 Create Minimal Node Project**

1. Create a directory for the project called minimal-express-bootstrap 

   **mkdir minimal-express-bootstrap**

   This will be the root directory of the project. Navigate to this directory.

2. Check that node and  npm are installed by checking for version 

   Since we are creating a node project create a [package.json](https://docs.npmjs.com/files/package.json) file (to hold your project’s dependencies and other identifying information. (more info [here](https://nodejs.dev/learn/the-package-json-guide)) ) simply by typing

   **npm init -y**  

   Where **-y = shorthand flag**, telling npm that it should take all the defaults. 

   If the flag is left out, you are in charge to specify the information about your project manually.

   

   ![neb1.1](.\images\neb\neb1.1.JPG)

   

3. Defaults are changeable on the command line (before running init), or via the editor (after running init).

   npm commands:

   ​		npm config list

   ​		npm set init.author.name "<your name>"

   ​		npm set init.author.email "<your email>"

   ​		npm set init.license "N/A"

   To open editor VS Code in the node_project directory:  > **code .**

4. Add information about the project, including its name, author and license. 

5. Add a description and the key words     "nodejs", "bootstrap" and "express"; package.json should look like this:	

![neb1.2](.\images\neb\neb1.2.JPG)



5. **Create a src/ folder** for the project's source code. In this folder, **create a src/index.js file** as an entry point to the     	project

6. Introduce a logging statement  in the src/index.js file to make sure this setup is running:

   ![neb1.3](.\images\neb\neb1.3.JPG)

7. Run this file from the command line using **node <path to file>**, the logging should appear in the terminal:

   ..\minimal-express-bootstrap> **node src\index.js**

8. Move this codeinto the package.json file script section, because that's where all the project's scripts (start, test, deploy) will end up eventually.

   ​	"scripts": {

   ​			**"start": "node src/index.js"**,

   ​			 "test": "echo \"Error: no test specified\" && exit 1"

    	},

Now on the command line, run the script again, but this time with **npm start**. 

npm = node package manger

Now that the project is created, we'll install libraries (node packages) to the project with npm. 

Note: once the first library is installed to the project using npm , it shows up in the package.json file as dependency. 

A ***node_modules/*** folder will also show up, where all the installed libraries will be kept as actual source code. 

Note the entry *"main" : "start.js"* in the package.json is the  entry point for the application, app.js (but more on that later)