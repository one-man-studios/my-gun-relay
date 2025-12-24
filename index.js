const express = require('express');
const Gun = require('gun');
const app = express();
const port = process.env.PORT || 8080;

// Essential for connecting from your Neocities site
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, Content-Length, X-Requested-With");
  next();
});

app.use(Gun.serve);

const server = app.listen(port, "0.0.0.0", () => {
  console.log('Gun relay running on port', port);
});

// Pass the server to Gun
Gun({ web: server });
