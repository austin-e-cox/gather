import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
<<<<<<< HEAD
          <Landing/>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
=======
          <Route exact path="/" component={Register} />
>>>>>>> c45c3bd9a172d1c01c1b6b31971e3786833973c9
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
  
}

export default App;
