export function startSocketServer() {
    const { Server } = require('socket.io');
    // server/server.js
    const http = require('http');
    const cors = require('cors');
    const express = require('express');
    const app = express();
    app.use(cors());;

    const server = http.createServer(app);
    const io = new Server(server, {
        cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
        }
    });


    io.on('connection', (socket) => {
    console.log('A user connected');
    
    // Handle chat messages
    socket.on('chat message', (message) => {
        io.emit('chat message', message); // Broadcast the message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
    });

    server.listen(3001, () => {
    console.log('WebSocket server listening on port 3001');
    });
}