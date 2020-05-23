import React from "react";
import "./style.css"


function UserPanel({activeUsers}) {
  //console.log(activeUsers)
  return (
    <div>

    <div className="inbox_chat scroll">
        <div className="chat_list">

        <div className="chat_ib">
                   
          {activeUsers.map((name,i) => (
                    <h5>{name}</h5>
                    ))
                  } 
          
          
        {/* <h5>Chuck Norris <span className="chat_date">May 12</span></h5>
                    <p>This is a phrase about Mr.Norris</p> */}
              

          



              {/* <h1>Active users:</h1>
              {activeUsers.length===0 ?
                <h3>No active users currently</h3>
                :
                <ul className="list-unstyled">
                  {activeUsers.map((name,i) => (
                    <li key={name+"__key__"+i} >{name}</li>
                    ))
                  }
                </ul>
              } */}

              </div>
        </div>  
    </div>
    
    </div>
  );
}

export default UserPanel;