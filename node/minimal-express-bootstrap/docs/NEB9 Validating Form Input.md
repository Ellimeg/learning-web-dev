# NEB9 Validating Form Input

Clicking Submit with empty fields gives:
![neb9.1](.\images\neb\neb9.1.JPG)

To check that the user has filled out both our fields. Use [express-validator module](https://www.npmjs.com/package/express-validator), a middleware that provides a number of useful methods for the sanitization and validation of user input.

1. **npm install express-validator**

2. add second argument to the POST route handler in users.js
![neb9.2](.\images\neb\neb9.2.JPG)

Now clicking Submit with empty fields gives:
![neb9.3](.\images\neb\neb9.3.JPG)

Call the [validationResult](https://express-validator.github.io/docs/validation-result-api.html) method to see if validation passed or failed.
	If none: ender out a “Thanks for registering” message. 
	If error: pass these errors back to our template, so as to inform the user that something’s wrong.
	if validation fails, also need to pass req.body back to the template, so that any valid form inputs aren’t reset:
![neb9.4](.\images\neb\neb9.4.JPG)

Submitting content in the fields gives:
![neb9.5](.\images\neb\neb9.5.JPG)

3. Change **form.pug** template
Check for an errors property, and if it’s present, loop over any errors and display them in a list:
![neb9.6](.\images\neb\neb9.6.JPG)

Finally check if a data attribute exists. if so, use it to set the values of the respective fields. If not: initialize it to an empty object {}, so that the form will still render correctly when you load it for the first time. We can do this with some JavaScript, denoted in Pug by a minus sign:
![neb9.7](.\images\neb\neb9.7.JPG)

Now, when you submit a successful registration, you should see a thank-you message, and when you submit the form without filling out both fields, the template should be re-rendered with an error message.

 