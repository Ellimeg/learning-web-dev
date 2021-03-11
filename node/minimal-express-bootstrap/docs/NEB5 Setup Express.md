# NEB5 Setup Express

[Express](onenote:#Dictionary&section-id={F90F67EF-47A9-4DE1-9C25-7FF62DCA1930}&page-id={924042E0-0551-4F3B-AAC8-1ADB4783BD4A}&object-id={371607E9-A813-4A98-AC9D-47728FBA5E07}&B&base-path=https://reedelsevier-my.sharepoint.com/personal/goodinrx_legal_regn_net/Documents/Roger @ Work/Docker.one) server: is the most popular choice when it comes to building JavaScript backend applications with Node.js ...apparently.

 Prerequisites (6.1.1 to 6.1.3):

- A Node.js application with a  watcher script to restart the application once the source code has changed, 
- Babel to enable JavaScript features that are not supported in Node.js yet, and 
- environment variables for the application's sensitive information. 

1.	Install Express

	npm install express

2.	Include Express by adding a  requires statement into src/index.js, allowing creation of an instance of an Express application:
	 ![neb5.1](\images\neb\neb5.1.JPG)

3.	Save changes:
	 ![neb5.2](.\images\neb\neb5.2.JPG)

	Although the express server is available, there is nothing much to see via the browser:
	 ![neb5.3](.\images\neb\neb5.3.JPG)

## Configure routes.

1.	Add to the following code to index.js

  	app.get('/', (req,  res) => {
  	    res.send('Hello World!');
  	});
  	
  	Aim: Using the **res**ponse object's send method to send something back to our client application. 
  	
  	The response object is everything we need related to specifying a response for our client, 
  	
  	The **req**uest object is everything we get from this particular request from our client. 
  	
  	The route points to the **root  (/)** of the domain. In the browser, you can visit this route with http://localhost:3000/ or http://localhost:3000 without the trailing slash.
  	
  	Once the file is saved, the application will restart automatically due to our setup. 
  	
  	Refresh bowser:
  	 ![neb5.4](.\images\neb\neb5.4.JPG)
  	
  	Assuming you have curl installed, in a PowerShell window  execute curl http://localhost:3000
  	 ![neb5.5](.\images\neb\neb5.5.png)
  	
  	Essentially **every Express application is a just a series of [routing and middleware](./Express.md) function calls**.:

## Implement application-level middleware.

1.	Install https://www.npmjs.com/package/cors. 

	Cors, in this context,  is a node.js package for providing a [Connect](http://www.senchalabs.org/connect/)/[Express](http://expressjs.com/) middleware that can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) (Cross-origin resource sharing) with various options.

	**npm install cors**

2. Update **src/index.js**
	 ![neb5.5](.\images\neb\neb5.5.JPG)   

   After these changes, all routes are extended with CORS HTTP headers. By default all routes are accessible for all domains now.

   Assuming you have curl installed, in a new in a PowerShell terminal again execute curl http://localhost:3000
    ![neb5.6](.\images\neb\neb5.6.png)

   Note: 
   (1) Headers now includes Access-Control-Allow-Origin set to wildcard.
   (2) This is not used just yet, but at the time of deploying an application to production, a whitelist of domains which are allowed to access your Express server application should be set up. The CORS library offers this kind of configuration. 

3. Finally move the hard coded port number to the **.env** file

  	PORT=3000
  	
  	And update index.js to use the .env file:
  	 ![neb5.7](.\images\neb\neb5.7.JPG)
  	Or using back tick " ` " at both ends, not single quote " ' "
  	 ![neb5.8](.\images\neb\neb5.8.JPG) 
## Implement basic routing.

1. Add the following routes to your Express application the URI itself doesn't change, but the method used **from** the Express instance does:

Add the following routes to **index.js** (Change the Hello World message and add new method for POST )
 ![neb5.9](.\images\neb\neb5.9.JPG)

2. Test endpoints using curl in a basic command prompt.
By default cURL will use a HTTP GET method. However, you can specify the HTTP method with the -X flag (or --request flag). Depending on the HTTP method you are choosing, you will access different routes of your Express application:
 ![neb5.10](.\images\neb\neb5.10.png)
Note: attempting a PUT without having a PUT support in index.js gives and error.
3. Add PUT and DELETE support. Update index.js:
 ![neb5.11](.\images\neb\neb5.11.JPG)
4. Make the URIs rest resources
Operating on the root URI with the CRUD operations doesn't really represent requesting a resource in REST. A resource could be a user resource, for example. Change the previously introduced routes to the following. Update index.js:
 ![neb5.12](.\images\neb\neb5.12.JPG)

Curl operations would now use : http://localhost:3000/users

Execute in command window:
 ![neb5.13](.\images\neb\neb5.13.png)

No information is transferred for creating a user yet, so the API endpoint for creating a user would be available now. However, one piece is missing to make the PUT HTTP method (update operation) and DELETE HTTP method (delete operation) RESTful from a URI's point of view: user id. Update index.js:
![neb5.14](.\images\neb\neb5.14.JPG)

In order to delete or update a user resource, you would need to know the exact user. That's where unique identifiers are used. In our Express routes, we can assign unique identifiers with parameters in the URI. Then the [callback function](https://www.robinwieruch.de/javascript-callback-function) holds the URI's parameter in the request object's properties.

Verify that the identifier shows up in the command line as output when executing cURL operation on /users/1, /users/2 or another identifier with a DELETE or UPDATE HTTP method.
![neb5.15](.\images\neb\neb5.15.png)