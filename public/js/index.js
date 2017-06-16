    // request connection to server
    var socket = io(); 
    
    // avoid ES6 on client (for IE etc)
    socket.on('connect', function() {
      console.info('Connected to Server');

      socket.emit('createEmail', {
        to: 'bob@server.com', 
        text: 'Hey, this is Vic on Chrome!'
      })

      socket.emit('createMessage', {
        to: 'bob@server.com', 
        text: 'Hey, this is a message from Vic on the client'
      })
    });

    socket.on('disconnect', function() {
      console.warn('Disconnected from Server');
    });

    socket.on('newEmail', function(email) {
      console.log('New email', email);
    });

    socket.on('newMessage', function(message) {
      console.log('New message', message);
    });