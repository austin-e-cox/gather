import React from "react";
import "./style.css"

function ChatLog({messageLog}) {
  //console.log(messageLog)
  return (
    <div>
     <div className="msg_history">
         {messageLog===[] ?
      <div className="no-msgs">No messages currently</div>
      :
      <div className="incoming_msg">
            <div className="incoming_msg_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                <div className="received_msg">
                    <div className="received_withd_msg">
                
                    {messageLog.map((messageItem, ind)=>
                     // switch for if userName is empty (automated room message)
                       messageItem.userName==="" ?
                    <p key={ind}> {messageItem.message}</p>
                    :
                    <p key={ind}> {messageItem.message} 
                    <span className="time_date">{messageItem.userName}</span>
                    </p>
                  
                    )
                    }
                  
                
                 </div>
            </div>
            
       </div>


       
      }
  </div>

{/* 

      <ul>
      {messageLog.map((messageItem, ind) =>
      // switch for if userName is empty (automated room message)
        !messageItem.userName ?
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