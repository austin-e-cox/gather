import React from "react";
import openSocket from 'socket.io-client';
import "./Chat.css"
import UserPanel from "../UserPanel"
import ChatWindow from "../ChatWindow"

function Chat() {
  return (
    <div className="App">
        <UserPanel activeUsers={this.state.activeUsers}/>
        <ChatWindow groupName={this.props.groupName} userName={this.props.userName} connected={connected} socket={socket} messageLog={this.state.messageLog} />
      </div>
   
<section className="pb_cover overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light" id="section-home">
      <div className="container">
      <div className="row align-items-center justify-content-center">
      <div className="col-12">
      <h2 className="heading mb-3">You are in CHAT_NAME</h2>
      <div className="messaging">
        <div className="inbox_msg">
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
              <div className="chat_list active_chat">
                <div className="chat_people">
                  <div className="chat_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                  <div className="chat_ib">
                    <h5>Chuck Norris <span className="chat_date">May 12</span></h5>
                    <p>This is a phrase about Mr.Norris</p>
                  </div>
                </div>
              </div>
              <div className="chat_list">
                <div className="chat_people">
                <div className="chat_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                  <div className="chat_ib">
                    <h5>Chuck Norris <span className="chat_date">May 12</span></h5>
                    <p>This is a phrase about Mr.Norris</p>
                  </div>
                </div>
              </div>
              <div className="chat_list">
                <div className="chat_people">
                <div className="chat_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                  <div className="chat_ib">
                    <h5>Chuck Norris <span className="chat_date">May 12</span></h5>
                    <p>This is a phrase about Mr.Norris</p>
                  </div>
                </div>
              </div>
              <div className="chat_list">
                <div className="chat_people">
                <div className="chat_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                  <div className="chat_ib">
                    <h5>Chuck Norris <span className="chat_date">May 12</span></h5>
                    <p>This is a phrase about Mr.Norris</p>
                  </div>
                </div>
              </div>
              <div className="chat_list">
                <div className="chat_people">
                <div className="chat_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                  <div className="chat_ib">
                    <h5>Chuck Norris <span className="chat_date">May 12</span></h5>
                    <p>This is a phrase about Mr.Norris</p>
                  </div>
                </div>
              </div>
              <div className="chat_list">
                <div className="chat_people">
                <div className="chat_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                  <div className="chat_ib">
                    <h5>Chuck Norris <span className="chat_date">May 12</span></h5>
                    <p>This is a phrase about Mr.Norris</p>
                  </div>
                </div>
              </div>
              <div className="chat_list">
                <div className="chat_people">
                <div className="chat_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                  <div className="chat_ib">
                    <h5>Chuck Norris <span className="chat_date">May 12</span></h5>
                    <p>This is a phrase about Mr.Norris</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mesgs">
            <div className="msg_history">
              <div className="incoming_msg">
                <div className="incoming_msg_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                    <p>Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.</p>
                    <span className="time_date"> 11:01 AM    |    May 9</span></div>
                </div>
              </div>
              <div className="outgoing_msg">
                <div className="sent_msg">
                  <p>Nice Chuck!</p>
                  <span className="time_date"> 11:01 AM    |    May 10</span> </div>
              </div>
              <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                    <p>Chuck Norris breathes air … five times a day.</p>
                    <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                </div>
              </div>
              <div className="outgoing_msg">
                <div className="sent_msg">
                  <p>Awesome Man!</p>
                  <span className="time_date"> 11:01 AM    |    Today</span> </div>
              </div>
              <div className="incoming_msg">
              <div className="incoming_msg_img"> <img src="https://www.gstatic.com/tv/thumb/persons/73040/73040_v9_ba.jpg" alt="chuck" /> </div>
                <div className="received_msg">
                  <div className="received_withd_msg">
                    <p>Chuck Norris has a mug of nails instead of coffee in the morning.</p>
                    <span className="time_date"> 11:01 AM    |    Today</span></div>
                </div>
              </div>
            </div>
            <div className="type_msg">
              <div className="input_msg_write">
                <input type="text" className="write_msg" placeholder="Type a message" />
                <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane" aria-hidden="true" /></button>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>



      </div>
    </section>
      
  );
}

export default Chat;
