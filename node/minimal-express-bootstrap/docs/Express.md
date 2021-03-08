# Express

There are two kinds of middleware in Express.js:  

- application-level middleware     and 
- router-level middleware.

**Application-level middleware :**

Use case:

people often run into the following error in the browser when accessing their Express application:

 

"Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:3000/. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing)." 

It most likely happens because we are accessing a domain from a foreign domain. [Cross-origin resource sharing (CORS)](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) was invented to secure web applications on a domain level.  

The idea: It shouldn't be possible to access data from other domains. For instance, a web application with the domain https://example.com shouldn't be allowed to access another web application with https://website.com by default. 

 

CORS is used to restrict access between web applications.

 

However, by adding this missing CORS header, access is possible. This is handy as we will run eventually into this error ourselves when implementing a consuming client application for our Express server if the client app is on another domain.

 

Since we don't want to do this manually for every route, we can use an application-level middleware to add the CORS HTTP header to every request by default. Therefore, we could write a middleware ourselves -- we will see how this works later -- or use an off the shelf Express.js middleware library which is doing the job for us: