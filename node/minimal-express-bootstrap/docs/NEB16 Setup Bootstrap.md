# NEB16 Setup Bootstrap

**Objective**: Serve static assets in Express

Static assets means static files like images, JavaScript and CSS files.

Use the built in [express.static middleware function](http://expressjs.com/en/starter/static-files.html). 

1.  Add the following to **app.js**
     ![neb16.1](.\images\neb\neb16.1.JPG)

    This allows files to be loaded from a directory called src/**public**

2.  Create directory src/**public**

3.  Download [the minified version of Bootstrap v4](https://getbootstrap.com/docs/4.4/getting-started/download/) into this
    directory, ensuring it’s named **bootstrap.min.css**.
    3.1 download comes zipped as bootstrap-4.4.1-dist.zip
    3.2 Unzip
     ![neb16.2](.\images\neb\neb16.2.JPG)
    3.3    Create folder public/**css** & copy the highlighted files (above) into it.

4.  Add markup to pug templates:
    4.1 In **layout.pug**:
     ![neb16.3](.\images\neb\neb16.3.JPG)
    Note we are including two files from our previously created css folder and **add a wrapper div**

    4.2 In **form.pug**:
     ![neb16.4](.\images\neb\neb16.4.JPG)
    Note: include class. 

    4.3 In **users.pug**:
     ![neb16.5](.\images\neb\neb16.5.JPG)

5.  Create a file called **styles.css** in the css folder and add the following:
    | styles.css                           |
    | ------------------------------------ |
    | ![neb16.7](.\images\neb\neb16.7.JPG) |

    Now when you refresh the page, you should see all of the Bootstrap glory!
     ![neb16.6](.\images\neb\neb16.6.JPG)