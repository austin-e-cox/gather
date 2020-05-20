import React from 'react';
import './App.css';
//import { subscribeToTimer } from './api';
import Chat from "../src/components/Chat";
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'no timestamp yet'
    };
  }
  
  componentDidMount() {
    socket.on('timer', (data) => {
      //console.log(data)
      this.setState({ 
        timestamp: data 
      });
    })
    socket.emit('subscribeToTimer', 1000);  
  }

  //groupName
  //username
  //userStatus
  //userList
  //userStatusList
  //message
  //messageLog
  //userInput


  render() {
    return (
      <div className="App">
        <p className="App-intro">
        {this.state.timestamp}
        </p>
        <div>
          <Chat userName={"UNSET_USER_"} groupName={"UNSET_GROUP_"}/>
        </div>
      </div>
    );
  }
}

export default App;
