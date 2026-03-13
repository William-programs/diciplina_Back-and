const express = require('express');
const server  = express();

server.get("/hello", (req, res) => {
    res.send("olá mundo ");
});

server.list(3000, () => {
    console.log("vai tomar nesse seu cuzinho");
});
