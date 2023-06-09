const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: 'http://188.225.75.140:3000',
        methods: ["GET", "POST"],
        credentials: true
      }
});

// let history = []

io.on('connection', (socket) => {
    // console.log('connect', history);
    // socket.emit('initHistory', {history})
    // io.emit('initHistory', {history})


    socket.on('start', (data) => {
        io.emit('start', data)
    });
    socket.on('stop', (data) => {
        // history.push(data.result)
        io.emit('stop', data)
    })
    socket.on('reset', (data) => {
        io.emit('reset', data)
    })
    socket.on('clear', () => {
        history = []
    })
});

server.listen(4000, () => {
  console.log('listening on *:4000');
});