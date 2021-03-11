require('dotenv').config();
require('./models/registration');
const app = require('./app');
const mongoose = require('mongoose');

console.log('Hello Demo');
console.log(process.env.MY_SECRET);

const server = app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${ process.env.PORT}!`);
});

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
       console.log(`Connection error: ${err.message}`);
    });
