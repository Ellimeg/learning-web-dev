# NEB14 Retrieve data from the database

**Objective:** Create a final route, which lists out all of the registrations.

1. Add a new route to routes/**users.js**, as follows:
    ![neb14.1](.\images\neb\neb14.1.JPG)

2. Create a corresponding view template (views/**users.pug**):
    ![neb14.2](.\images\neb\neb14.2.JPG)

3. Now on visiting http://localhost:3000/api/users/registrations:
    ![neb14.3](.\images\neb\neb14.3.JPG)

4. To retrieve any registrations from the database and pass them to the view:
   4.1   Update routes/**users.js**:          
       ![neb14.4](.\images\neb\neb14.4.JPG)

         Here, we’re using Mongo’s [Collection#find method](https://docs.mongodb.com/manual/reference/method/db.collection.find/), which, if invoked without parameters, will return all of the records in the collection.  

   Because the database lookup is asynchronous, we’re waiting for it to complete before rendering the view.  

   If any records were returned, these will be passed to the view template in the registrations property. If no records were returned, registrations will be an empty array. 

   In views/users.pug, we can then check the length of whatever we’re handed and either loop over it and output the records to the screen, or display a “No registrations” message. 

   4.2   Update **users.pug**:   
       ![neb14.5](.\images\neb\neb14.5.JPG)

5. Refresh http://localhost:3000/api/users/registrations to see saved content:



