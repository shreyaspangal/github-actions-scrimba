const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Works on your machine?');
});

module.exports = app;