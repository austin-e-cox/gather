import React from "react";
import "./style.css"

// user panel component, should be passed list of active users
function UserPanel({activeUsers}) {
  //console.log(activeUsers)
  return (
    <div>
      <div className="inbox_people">

        <div className="headind_srch">
          <div className="recent_heading">
            <h4>UserName</h4>
          </div>
          <div className="srch_bar">
            <div className="stylish-input-group">
              <input type="text" className="search-bar" placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="inbox_chat scroll">
          <div className="chat_list">
            <div className="chat_people">
              <div className="chat_img"> 
                <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" />
              </div>
              <div className="chat_ib">
                {activeUsers.map((name,i) => (
                  <h5 key={i}>Your name is {name}</h5>
                ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPanel;