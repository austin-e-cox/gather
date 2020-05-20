import React from "../../../node_modules/react";
import "./ChatWindow.css"
import ChatLog from "../ChatLog/ChatLog"
import InputArea from "../InputArea/InputArea"

function ChatWindow({ userName, groupName, messageLog, socket }) {

  return (
    <div>
      <ChatLog messageLog={messageLog}/>
      <InputArea userName={userName} socket={socket}/>
    </div>
  );
}

export default ChatWindow;