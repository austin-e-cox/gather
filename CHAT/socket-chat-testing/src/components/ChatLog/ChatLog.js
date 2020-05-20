import React from "../../../node_modules/react";
import "./ChatLog.css"

function ChatLog({messageLog}) {
  //console.log(messageLog)
  return (
    <div>
   
      {messageLog.map((messageItem, ind) =>
      // switch for if userName is empty (automated room message)
        

      <div className="mesgs">
    <div className="msg_history">
    <div className="incoming_msg">
    <div className="received_msg">
    <div className="received_withd_msg">
    <p>{messageItem.message}</p>
   
    <span className="time_date"> {messageItem.userName}</span>


    </div>

    </div>
    </div>
    </div>

    </div>


        )
      }
     
    




{/* 
    <ul>
      {messageLog.map((messageItem, ind) =>
      // switch for if userName is empty (automated room message)
        messageItem.userName==="" ? 
        <li key={ind}>{messageItem.message}</li>
        :
        <li key={ind}>{messageItem.userName}: {messageItem.message}</li>
        )
      }
      </ul> */}


    </div>
  );
}

export default ChatLog;