# NEB10 Connect to a database

Prerequisite:

**(1) MongoDB** (a NoSQL DB): use either [Local Install](onenote:MongoDB.one#Local Install&section-id={C4A28F98-5045-43AA-B258-1EC49B1B97E0}&page-id={43F9BE7B-254E-4CEE-B852-620B4ADC2C2A}&end&base-path=https://reedelsevier-my.sharepoint.com/personal/goodinrx_legal_regn_net/Documents/Roger @ Work) or [MongoDB Atlas](onenote:MongoDB.one#MongoDB Atlas&section-id={C4A28F98-5045-43AA-B258-1EC49B1B97E0}&page-id={F2467CE4-4B0B-451B-9676-FC37E87CAB39}&object-id={EBDF6C7E-E03A-4187-B95C-2DE0AF4D37C5}&10&base-path=https://reedelsevier-my.sharepoint.com/personal/goodinrx_legal_regn_net/Documents/Roger @ Work) 

**(2) A Mongo DB GUI**: use [Compass](onenote:MongoDB.one#Compass&section-id={C4A28F98-5045-43AA-B258-1EC49B1B97E0}&page-id={FBB56A2E-8E50-4F0D-8C6F-39F8506BC407}&object-id={B64549B1-F267-46F3-A7CE-8AD5637F10BF}&10&base-path=https://reedelsevier-my.sharepoint.com/personal/goodinrx_legal_regn_net/Documents/Roger @ Work)

1. Check DB Connection using Compass:

  1.1 Local install:
  Start the server by typing the following command: mongod
  Open Compass. Accept defaults (server:localhost port: 27017)
  Press the CONNECT button
  (Note that
  (1) the databases admin, config and local are created automatically).
  (2) that **local installations of MongoDB don’t have a default user or password**

  1.2 Using Atlas:
  Open Compass. New Connection > add a connection string.

  *Syntax:*
  *mongodb://<dbuser>:<dbpassword>@ds211709.mlab.com:11709/?authSource=<dbname>.*

  To find your Compass connection string in Atlas
  Login to https://cloud.mongodb.com/ Clusters > Connect > Connect using MongoDB Compass > select: I have MongoDB Compass 1.12 or later > copy the connection string and paste into compass:

  My connection string:
  mongodb+srv://bart:<password>@simpson.0icbp.mongodb.net/test

  The default connection string you get from MongoDB Atlas's web interface mentions a database named **test**.
  The test database does not exist until it is first used.

  Where:
  User name = bart
  Cluster name = simpson

   ![neb10.1](.\images\neb\neb10.1.JPG)



A MongoDB database is composed of one or more collections, which are nothing but groups of [BSON documents (short for binary JSON)](https://docs.mongodb.com/manual/reference/bson-types/index.html?jmp=tuts&Americas_USA_tuts_stitch_tutorials_ATLAS). The free tier cluster on MongoDB Atlas can have a maximum of 500 collections. "test" is merely one collection. 


2.  Get an application connection string (for later):
    2.1 Login to https://cloud.mongodb.com/ Clusters > Connect > Connect your application
    
     ![neb10.2](.\images\neb\neb10.2.JPG)

Q: What name am I supposed to substitute in the myFirstDatabase field?" or "How do I create the database that I will put in this string?". 
A: just put any name you prefer, like **test**, - if the database does not yet exist, MongoDB will automatically create it.

    2.2  Tick the Include full driver code example check box to get:
    
     ![neb10.3](.\images\neb\neb10.3.JPG)