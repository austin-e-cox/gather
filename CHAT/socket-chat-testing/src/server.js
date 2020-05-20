const io = require('socket.io')();

var numUsers = 0;
let messageLog = [];

io.on('connection', (socket) => {
  socket.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      socket.emit('timer', new Date());
    }, interval);
  });


  var addedUser = false;
  let activeUsers = [];

  // when the client emits 'new message', this listens and executes
  socket.on('new message', (data) => {
    data = JSON.parse(data)
    messageLog.push({
      userName: data.userName,
      message: data.message
    })
    // we tell the client to execute 'new message'
    socket.emit('new message', JSON.stringify({
      userName: data.userName,
      message: data.message
    }));
    socket.broadcast.emit('new message', JSON.stringify({
      userName: data.userName,
      message: data.message
    }));
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', (userName) => {
    console.log("add user", userName)
    if (addedUser) return;
    
    // update number of users and message history
    activeUsers.push(userName)
    messageLog.push({
      userName: userName,
      message: "user joined"
    })

    // we store the username in the socket session for this client
    socket.userName = userName;
    ++numUsers;
    addedUser = true;
    let m = messageLog;
    if (m.length > 5){
      m = m.slice(m.length-5,m.length)
    }
    socket.emit('login', {
      activeUsers: activeUsers,
      messageLog: m
    });
    // echo globally (all clients) that a person has connected
    console.log("emmiting user joined",)
    socket.broadcast.emit('user joined', JSON.stringify({
      userName: userName,
      numUsers: numUsers
    }));
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', () => {
    //console.log("typing")
    socket.broadcast.emit('typing', socket.userName);
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    //console.log("stop typing")
    socket.broadcast.emit('stop typing', socket.userName);
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
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
      socket.broadcast.emit('user left', JSON.stringify({
        userName: socket.userName,
        numUsers: numUsers
      }));
    }
  });

});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);