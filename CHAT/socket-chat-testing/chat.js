
const io = require('socket.io')();

io.on('connection', (socket) => {
  socket.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      socket.emit('timer', new Date());
    }, interval);
  });
});


const port = 8000;
io.listen(port);
console.log('chat listening on port ', port);