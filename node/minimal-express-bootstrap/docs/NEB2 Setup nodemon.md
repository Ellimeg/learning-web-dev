# NEB2 Setup Nodemon

1. As it stands the script will need to be started every time to try the source code. 
   To change this behaviour have an always-running node process. 
    Install the commonly used nodemon library on the command line as a development dependency to the project (--save-dev):

   ​	**npm install nodemon  --save-dev**  

2. Exchange node with nodemon in your npm start script in package.json
   ![neb2.1](.\images\neb\neb2.1.JPG)

3. Have nodemon watch a few other directories for changes:
   ![neb2.2](.\images\neb\neb2.2.JPG)

4. run your application with **npm start** from the command line, it should keep running. 
   ![neb2.3](.\images\neb\neb2.3.JPG)

5. Change the code in index.js to: console.log('Hello ever running Node.js project.') and back again. Very handy because if you introduce a bug (omit final single quote in message), you will see a stack trace in the command line. Fix and save and the script runs again automatically without any flaws:
   ![neb2.4](.\images\neb\neb2.4.JPG)

6. To restart nodemon in the terminal use the command "**rs**"