const express = require("express");
const app = express();

app.get("/", (req, res) => {
    let item = "machine";
    const msg = `Works on my ${item}.`;
    res.send(msg);
});

module.exports = app;
