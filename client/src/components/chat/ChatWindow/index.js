import React from "react";
import "./style.css"
import ChatLog from "../ChatLog"
import InputArea from "../InputArea"

function ChatWindow({ userName, groupName, messageLog, socket }) {

  return (
    <div>
    <div className="mesgs">
      <div className="msg_history">
        <ChatLog messageLog={messageLog}/>
        <InputArea userName={userName} socket={socket}/>
      </div>
    </div>
     
    </div>
  );
}

export default ChatWindow;