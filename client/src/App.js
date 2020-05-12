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
          <Route exact path="/" component={Register} />
=======
          <Landing/>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
>>>>>>> 411b0e333f075f59897862067b28aa7f98f0a636
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
  
}

export default App;
