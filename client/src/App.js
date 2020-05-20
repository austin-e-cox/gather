import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';


import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Interest from "./components/layout/Interest";
import About from "./components/layout/About";

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Interest/>
          <About/>
        </div>
      </Router>
    );
  }
  
}

export default App;
