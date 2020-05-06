import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div>
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
  </div>
);

export default Landing;
