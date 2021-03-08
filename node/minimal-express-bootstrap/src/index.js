require('dotenv').config();
const express = require('express');
const cors = require('cors');

console.log('Hello Demo');

console.log(process.env.MY_SECRET);

const app = express();

app.use(cors());

app.get('/users', (req,  res) => {
    return res.send('Recieved a GET HTTP message');
});

app.post('/users', (req,  res) => {
    return res.send('Recieved a POST HTTP message');
});

app.put('/users', (req,  res) => {
    return res.send('Recieved a PUT HTTP message');
});

app.delete('/users', (req,  res) => {
    return res.send('Recieved a DELETE HTTP message');
});

app.listen(3000, () => console.log(`My app listerning on port ${process.env.PORT}!`));

