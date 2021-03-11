# NEB12 Create database Schema

Although the database can be used loose (schema-less) we are interacting with it via Mongoose and everything in Mongoose starts with a schema. 

In Mongoose, each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

1.  Create a src/**models** folder and add a new file named **registration.js** containing:

 ![neb12.1](.\images\neb\neb12.1.JPG)


    Code is defining a type (as we already have validation in place) and are making use of the [trim helper method](https://mongoosejs.com/docs/api.html#schemastringoptions_SchemaStringOptions-trim) to remove any superfluous white space from user input.
    
    Then [compile a model](http://mongoosejs.com/docs/models.html) from the Schema definition, and export it for use elsewhere in our app.

2.  The final piece of boilerplate is to require the model in **start.js**:

 ![neb12.2](.\images\neb\neb12.2.JPG)