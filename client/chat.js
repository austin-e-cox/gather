const io = require('socket.io')();

var numUsers = 0;
let messageLog = [];

io.on('connection', (socket) => {
  var addedUser = false;
  let activeUsers = [];

  // pass user to group
  socket.on('join group', (data) => {
    let room = data;
    if (!room){
      socket.emit("disconnecting")
      socket.disconnect()
    }
    socket.join(data, () => {
      console.log("user has joined group", room)
      //console.log(socket.rooms)
    })
  })
  
  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    console.log("new message", data)
    let room = Object.keys(socket.rooms)[Object.keys(socket.rooms).length-1];
    //console.log("room",room)
    //console.log("rooms",Object.keys(socket.rooms))
    // userName, userId, message
    data = JSON.parse(data)
    messageLog.push({
      userName: data.userName,
      message: data.message
    })
    // we tell the client to execute 'new message'
    io.sockets.in(room).emit('new message', JSON.stringify({
      userName: data.userName,
      message: data.message
    }));
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', (userName) => {
    let room = Object.keys(socket.rooms)[Object.keys(socket.rooms).length-1];
    console.log("add user", userName)
    //if (addedUser) return;
    
    // update number of users and message history
    activeUsers.push(userName)
    messageLog.push({
      userName: userName,
      message: "user joined"
    })

    // we store the username in the socket session for this client
    io.sockets.in(room).userName = userName;
    ++numUsers;
    //addedUser = true;
    let m = messageLog;
    if (m.length > 5){
      m = m.slice(m.length-5,m.length)
    }
    io.sockets.in(room).emit('login', {
      activeUsers: activeUsers,
      messageLog: m
    });
    // echo globally (all clients) that a person has connected
    console.log("emmiting user joined",)
    io.sockets.in(room).emit('user joined', JSON.stringify({
      userName: userName,
      numUsers: numUsers
    }));
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', () => {
    let room = Object.keys(socket.rooms)[Object.keys(socket.rooms).length-1];
    //console.log("typing")
    io.sockets.in(room).emit('typing', socket.userName);
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    let room = Object.keys(socket.rooms)[Object.keys(socket.rooms).length-1];
    //console.log("stop typing")
    io.sockets.in(room).emit('stop typing', socket.userName);
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    let room = Object.keys(socket.rooms)[Object.keys(socket.rooms).length-1];
    console.log("disconnect")
    if (addedUser) {
      --numUsers;

      // update the active users and message history
      activeUsers.filter((val) => val===socket.userName)
      messageLog.push({
        userName: socket.userName,
        message: "user left"
      })  

      // echo globally that this client has left
      console.log("user left", socket.userName)
      io.sockets.in(room).emit('user left', JSON.stringify({
        userName: socket.userName,
        numUsers: numUsers
      }));
    }
  });

});

const chatPort = 8001;
io.listen(chatPort);
console.log('chat listening on port ', chatPort);