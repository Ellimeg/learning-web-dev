# NEB13 Save data to database

1. Add requiring Mongoose in routes/**user.js** file
   and update Registration model:
    ![neb13.1](.\images\neb\neb13.1.JPG)
   
   Now, when the user posts data to the server, if validation passes we can go ahead and create a new Registration object and attempt to save it.

   As the database operation is an asynchronous operation which returns a Promise, we can **chain a .then()** onto the end of it to deal with a successful insert and a .catch() to deal with any errors:

2. Change router.post method:
    ![neb13.2](.\images\neb\neb13.2.JPG)

3. Submit registration data via http://localhost:3000/api/users/register.
   You should get the "Thank you for your registration!" message.

4. Confirm that the database neb-demo-db is now present using Compass and it has a single collection:
    ![neb13.3](.\images\neb\neb13.3.JPG)

   Click on the refresh icon and click around a bit to get everything to refresh.
   Click on registration in LH pane to see saved document data.
    ![neb13.4](.\images\neb\neb13.4.JPG)