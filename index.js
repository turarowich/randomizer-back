const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
      }
});
let list = []

io.on('connection', (socket) => {
    socket.on('start', (data) => {
        io.emit('start', data)
    });
    socket.on('stop', (data) => {
        io.emit('stop', data)
    })
    socket.on('reset', (data) => {
        io.emit('reset', data)
    })
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});