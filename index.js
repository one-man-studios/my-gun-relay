const express = require('express');
const Gun = require('gun');
const app = express();
const port = process.env.PORT || 8080;

// This allows your Neocities site to connect to this server
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(Gun.serve);

const server = app.listen(port, "0.0.0.0", () => {
  console.log('Gun relay is running on port', port);
});

Gun({ web: server });
