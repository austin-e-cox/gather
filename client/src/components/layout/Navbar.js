import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="pb-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">Gather</a>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="probootstrap-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span><i className="ion-navicon"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsingNavbar" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Smth else</a></li>
        
            <li className="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0"><a className="nav-link" href="#" target="_blank"><span className="pb_rounded-4 px-4">Sign in</span></a></li>
          </ul>
        </div>
      </div>
    </nav>


  <Link to="/">Landing</Link>
  </>
);

export default Navbar;