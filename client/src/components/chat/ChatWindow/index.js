import React from "react";
import "./style.css"
import ChatLog from "../ChatLog"
import InputArea from "../InputArea"

function ChatWindow({ userName, groupName, messageLog, socket }) {

  return (
    <div>
    
    
        <ChatLog messageLog={messageLog}/>
        <InputArea userName={userName} socket={socket}/>

   
     
    </div>
  );
}

export default ChatWindow;