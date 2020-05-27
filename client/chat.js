const io = require('socket.io')();

var numUsers = 0;
let messageLog = [];

io.on('connection', (socket) => {
  //var addedUser = false;
  let activeUsers = [];
  let room = "";

  // pass user to group
  socket.on('join group', (data) => {
    room = data;
    if (!room){
      socket.emit("disconnecting")
      socket.disconnect()
    }
    socket.join(data, () => {
      console.log("user has joined group", room)
    })
  })
  
  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    console.log("new message", data)

    // userName, userId, message
    data = JSON.parse(data)
    messageLog.push({
      userName: data.userName,
      message: data.message
    })
    // we tell the client to execute 'new message'
    io.to(room).emit('new message', JSON.stringify({
      userName: data.userName,
      message: data.message
    }));
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', (userName) => {
    console.log("add user", userName)
    
    // update number of users and message history
    activeUsers.push(userName)
    messageLog.push({
      userName: userName,
      message: `${userName} joined`
    })

    // we store the username in the socket session for this client
    socket.userName = userName;
    ++numUsers;
    //addedUser = true;
    let m = messageLog;
    if (m.length > 5){
      m = m.slice(m.length-5,m.length)
    }
    socket.emit('login', {
      activeUsers: activeUsers,
      messageLog: m
    });
    // echo globally (all clients) that a person has connected
    console.log("emitting user joined",)
    socket.broadcast.to(room).emit('user joined', JSON.stringify({
      userName: userName,
      numUsers: numUsers
    }));
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', () => {
    //console.log("typing")
    socket.broadcast.to(room).emit('typing', socket.userName);
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    //console.log("stop typing")
    socket.broadcast.to(room).emit('stop typing', socket.userName);
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    console.log("disconnect")
    --numUsers;

    // update the active users and message history
    activeUsers.filter((val) => val===socket.userName)
    messageLog.push({
      userName: socket.userName,
      message: `${socket.userName} left`
    })

    // echo globally that this client has left
    console.log("user left", socket.userName)
    io.to(room).emit('user left', JSON.stringify({
      userName: socket.userName,
      numUsers: numUsers
    }));
    console.log("left emitted",room)
    //}
  });

});

const chatPort = 8001;
io.listen(chatPort);
console.log('chat listening on port ', chatPort);