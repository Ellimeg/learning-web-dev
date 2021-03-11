# NEB11 Interact with a database

**Objective:** hook our form up to our database, so that we can save whatever data the user enters.
[If running Mongo locally, don’t forget to start the server with the command mongod.]
  1.  Add the following to the .env file:
      For local mongo install:
        DATABASE=mongodb://localhost:27017/neb-demo-db
      For mLab:
        DATABASE=mongodb+srv://bart:*<password>*@simpson.0icbp.mongodb.net/neb-demo-db?retryWrites=true&w=majority
      
      Where
| retryWrites | :  Retryable writes allow MongoDB drivers to automatically retry certain write  operations a single time if they encounter network errors, or if they cannot  find a healthy [primary](https://docs.mongodb.com/manual/reference/glossary/#term-primary) in the [replica sets](https://docs.mongodb.com/manual/replication/#replication) or [sharded cluster](https://docs.mongodb.com/manual/sharding/#sharding-introduction). |
| ----------- | ------------------------------------------------------------ |
| w=majority  | Write concern [w: "majority"](https://docs.mongodb.com/manual/reference/write-concern/#writeconcern."majority") returns acknowledgement after the commit has been  applied to a majority (M) of voting members; i.e. the commit has been applied  to the primary and (M-1) voting secondaries.     For transactions, when you commit with [w: "majority"](https://docs.mongodb.com/manual/reference/write-concern/#writeconcern."majority") write concern,   (1) transaction-level ["majority"](https://docs.mongodb.com/manual/reference/read-concern-majority/#readconcern."majority") read concern guarantees that operations have read  majority-committed data. For transactions on sharded clusters, this view of  the majority-committed data is not synchronized across shards.     (2) transaction-level ["snapshot"](https://docs.mongodb.com/manual/reference/read-concern-snapshot/#readconcern."snapshot") read concern guarantees that operations have from  a synchronized snapshot of majority-committed data. |

  2.  Install mongoose drivers using: **npm install mongoose**

  3.  Add the following to **start.js**

 ![neb11.1](.\images\neb\neb11.1.JPG)


  4.  Ensure you are off the LN VPN  & Start the app: npm start or rs
      You should get the connection open message:

 ![neb11.2](.\images\neb\neb11.2.JPG)


    Ignore the warning
    Note: if on the VPN you will get a connection error as ahown:

 ![neb11.3](.\images\neb\neb11.3.JPG)


