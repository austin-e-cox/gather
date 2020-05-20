import React from "../../../node_modules/react";
import "./style.css"


function UserPanel({activeUsers}) {
  //console.log(activeUsers)
  return (
    <div>
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
    }
    </div>
  );
}

export default UserPanel;