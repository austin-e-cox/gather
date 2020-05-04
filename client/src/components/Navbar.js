import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
      <a className="navbar-brand d-flex w-50 mr-auto" href="#">
        Gather
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#collapsingNavbar3"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Smth else
            </a>
          </li>
          
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
