import React, { useState } from "react";
import "./style.css"

const TYPING_TIMER_LENGTH = 800; // ms
let typing = false;
let lastTypingTime;

const sendMessage = (userName, message, socket) => {
  // if there is a non-empty message // and a socket connection
  if (message)
    // tell server to execute 'new message' and send along one parameter
    console.log("new message", userName, message)
    socket.emit('new message', JSON.stringify({
      userName: userName,
      message: message
    }));
}

// Updates the typing event
const updateTypingStatus = (socket) => {
  if (!typing) {
    typing = true;
    console.log("typing")
    socket.emit('typing');
  }
  lastTypingTime = (new Date()).getTime();

  setTimeout(() => {
    console.log("stop typing")
    var typingTimer = (new Date()).getTime();
    var timeDiff = typingTimer - lastTypingTime;
    if (timeDiff >= TYPING_TIMER_LENGTH && typing) {
      socket.emit('stop typing');
      typing = false;
    }
  }, TYPING_TIMER_LENGTH);
}


function InputArea({userName, socket }) {
  const [message, setMessage] = useState('');
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      //console.log("SUBMIT")
      e.preventDefault();
      sendMessage(userName, message, socket);
      typing = false;
      socket.emit("stop typing");
      setMessage("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(userName, message, socket);
    typing = false;
    socket.emit("stop typing");
    setMessage("")
  };

  const handleMessageChange = (e) => {
    //console.log("CHANGE");
    socket.emit("typing")
    setMessage(e.target.value);
    updateTypingStatus(socket)
  }

  return (
    <div className="type_msg">
              <div className="input_msg_write">
                <input type="text" className="write_msg" placeholder="Type a message" value={message} onChange={handleMessageChange} onSubmit={handleSubmit} onKeyPress={handleKeyPress}/>
                <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
              </div>
            </div>
  );
}

export default InputArea;