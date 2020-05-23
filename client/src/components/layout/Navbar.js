import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';


class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light" id="pb-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">Gather</Link>
          <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="probootstrap-navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span><i className="ion-navicon"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsingNavbar" >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link className="nav-link" to="/">Contact</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
              {
                this.props.auth.isAuthenticated === true
                ?
                  <li className="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0" onClick={this.onLogoutClick}>
                    <Link className="nav-link">
                      <span className="pb_rounded-4 px-4">Logout</span>
                    </Link>
                  </li>
                :
                  <li className="nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0">
                    <Link className="nav-link" to="/login">
                      <span className="pb_rounded-4 px-4">Sign in</span>
                    </Link>
                  </li>
                }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
