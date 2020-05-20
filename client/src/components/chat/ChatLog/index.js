import React from "../../../node_modules/react";
import "./style.css"

function ChatLog({messageLog}) {
  //console.log(messageLog)
  return (
    <div>
    {messageLog===[] ?
      <div className="no-msgs">No messages currently</div>
      :
      <ul>
      {messageLog.map((messageItem, ind) =>
      // switch for if userName is empty (automated room message)
        messageItem.userName==="" ? 
        <li key={ind}>{messageItem.message}</li>
        :
        <li key={ind}>{messageItem.userName}: {messageItem.message}</li>
        )
      }
      </ul>
    }
    </div>
  );
}

export default ChatLog;