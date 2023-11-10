const express = require('express');
const path = require('path');
const http = require('http');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app);

const io = socketio(server, {
    cors: {
        origin:['http://127.0.0.1:5500']
    }
});

io.on('connection', (socket) => {
    console.log('connection established');

    socket.on('send message', message => {
        socket.emit('send-message', message)
})
})



app.use(express.static(path.join(__dirname, '../client-side')))

const PORT = 5000 

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})