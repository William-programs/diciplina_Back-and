const express = require('express');
const server  = express();

server.get("/hello", (req, res) => {
})

server.list(3000, () => {
    console.log("server?")
});
