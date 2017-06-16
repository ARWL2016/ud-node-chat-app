const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express(); 
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected: Vic');

  socket.emit('newEmail', {
    from: 'bob@server.com', 
    text: 'Hey, there Vic! How is the browser?',
    createdAt: new Date()
  });

  socket.emit('newMessage', {
    from: 'bob@server.com', 
    text: 'Hey, Vic - this is a message update from the server',
    createdAt: new Date()
  });

  socket.on('createEmail', (newEmail) => {
    console.log(newEmail);
  });

  socket.on('createMessage', (newMessage) => {
    console.log(newMessage);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
});

server.listen(port, () => {
  console.log(`Listening on PORT ${port}`);
});

