import React from "../../../node_modules/react";
import "./UserPanel.css"


function UserPanel({activeUsers}) {
  //console.log(activeUsers)
  return (
    <div>

<div className="inbox_people">
      <div className="headind_srch">
              <div className="recent_heading">
                <h4>Active users</h4>
              </div>
              <div className="srch_bar">
                <div className="stylish-input-group">
                  <input type="text" className="search-bar" placeholder="Search" />
                </div>
              </div>
            </div>

            
    
   <div className="inbox_chat scroll">

   
     
      {activeUsers.map((name,i) => (

        <div className="chat_list">
                <div className="chat_people">
                <div className="chat_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                  <div className="chat_ib">
                    <h5>{name} <span className="chat_date">May 12</span></h5>
                    <p>This is a phrase about Mr.Norris</p>
                  </div>
                </div>
              </div>

      ))
      }
  
   </div>

</div>


      

{/* 
   <h1>Active users:</h1>
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
  );
}

export default UserPanel;