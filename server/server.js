const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();

const clientPath = `${__dirname}/../client`;
console.log(`Serving static from ${clientPath}`);

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);



server.on('error', (err) => {
    console.error('Server error:', err);
});

server.listen(8000, () => {
    console.log('Connect Server started!');
});