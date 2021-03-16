import path from 'path';

global.__dirname = path.resolve('./');
console.log('currunt folder:' + __dirname);

console.log('Hello ES6.');