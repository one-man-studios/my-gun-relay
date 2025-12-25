const http = require('http');
const Gun = require('gun');

const server = http.createServer().listen(process.env.PORT || 8080);
const gun = Gun({ 
  web: server, 
  file: 'db' // This saves data to Koyeb's local storage
});

console.log('Relay peer started on port ' + (process.env.PORT || 8080));
