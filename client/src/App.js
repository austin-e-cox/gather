<<<<<<< HEAD
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
=======
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
>>>>>>> 1acf53c9bfa05c797149c41de7751bbdf99665aa
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
<<<<<<< HEAD
      </>
    );
  }
=======
    </Router>
  );
>>>>>>> 1acf53c9bfa05c797149c41de7751bbdf99665aa
}

export default App;
