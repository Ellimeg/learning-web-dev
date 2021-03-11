# NEB15 Add HTTP authentication

**Objective**: Lock down the registration list

1.  Install [http-auth module](https://www.npmjs.com/package/http-auth) using **npm install http-auth**

2.  Require it in routes/users.js, along with the Path module
     ![neb15.1](.\images\neb\neb15.1.JPG)

4.  Create file src/**users.htpasswd**  to store username and password separated by a colon
    This can be plain text however the http-auth module also supports hashed passwords, so you could also run the password through a service such as  [Htpasswd Generator](http://www.htaccesstools.com/htpasswd-generator/).
    Use the encrypted password in **users.htpasswd.**

        roger:{SHA}ynCRplJG etc etc

5.  Update routes/users.js to use the file **users.htpasswd**
     ![neb15.2](.\images\neb\neb15.2.JPG)
    And add it to the route
     ![neb15.3](.\images\neb\neb15.3.JPG)

6.  Test:
    To view registrations at http://localhost:3000/api/users/registrations will now require login.
     ![neb15.4](.\images\neb\neb15.4.JPG)