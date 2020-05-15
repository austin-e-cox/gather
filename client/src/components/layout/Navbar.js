import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => (

  <nav className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="pb-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">Gather</Link>
        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="probootstrap-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span><i className="ion-navicon"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsingNavbar" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/">About us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
        
            <li className="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0"><Link className="nav-link" to="/login" target="_blank"><span className="pb_rounded-4 px-4">Sign in</span></Link></li>
          </ul>
        </div>
      </div>
    </nav>


);

export default Navbar;