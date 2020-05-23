import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (


      <section className="pb_cover overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light" id="section-home">
        <div className="container">
       
          <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
          <h2 className="heading mb-3">Hey there, {user.name}</h2>

          <div className="sub-heading">
                <p className="mb-4">
                  You are logged into a full-stack{" "}
                  <span>MERN</span> app 👏
                </p>
                <button className="btn btn-success btn-lg pb_btn-pill " onClick={this.onLogoutClick}>
                  Logout
                </button>
              </div>
          </div>
            
           

           

            <div className="col-sm-3  align-self-center">
              <form action="#" className="bg-light rounded pb_form_v1">
                <h2 className="mb-4 mt-0 text-center">Chat Category 1</h2>
                <div className="form-group">
                  <ul>
                    <li> 1 stuff</li>
                    <li> 2 stuff</li>
                    <li> 3 stuff</li>
                    <li> 4 stuff</li>
                  </ul>
                </div>
              </form>
            </div>

            <div className="col-sm-3  align-self-center">
              <form action="#" className="bg-warning rounded pb_form_v1">
                <h2 className="mb-4 mt-0 text-center">Chat Category 2</h2>
                <div className="form-group">
                  <ul>
                    <li> 1 stuff</li>
                    <li> 2 stuff</li>
                    <li> 3 stuff</li>
                    <li> 4 stuff</li>
                  </ul>
                </div>
              </form>
            </div>

            <div className="col-sm-3  align-self-center">
              <form action="#" className="bg-success rounded pb_form_v1">
                <h2 className="mb-4 mt-0 text-center">Chat Category 3</h2>
                <div className="form-group">
                  <ul>
                    <li> 1 stuff</li>
                    <li> 2 stuff</li>
                    <li> 3 stuff</li>
                    <li> 4 stuff</li>
                  </ul>
                </div>
              </form>
            </div>






          </div>
        </div>
      </section>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);