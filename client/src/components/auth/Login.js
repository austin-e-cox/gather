import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // Push user to dashboard when they login...
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <>



<section className="pb_cover overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light" id="section-home">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            <h2 className="heading mb-3">Glad to have you back!</h2>

            <div className="sub-heading">
              <p className="mb-4">
              Don't have an account?
              <p className="mb-5"><Link className="btn btn-success btn-lg pb_btn-pill" to="/" ><span className="pb_font-14 text-uppercase pb_letter-spacing-1">Register</span></Link></p>
              </p>
              </div>
          </div>
          <div className="col-md-1">
          </div>

          <div className="col-md-5 relative align-self-center">

            <form  className="bg-white rounded pb_form_v1" noValidate onSubmit={this.handleSubmit}>
              <h2 className="mb-4 mt-0 text-center">Sign In</h2>

              <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
              onChange={this.handleChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames('form-control pb_height-50 reverse', {
                invalid: errors.email || errors.emailnotfound
              })}
            />
             <span style={{color: 'red'}}>{errors.email}{errors.emailnotfound}</span>
                </div>
              <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
              onChange={this.handleChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames('form-control pb_height-50 reverse', {
                invalid: errors.password || errors.passwordincorrect
              })}
            />
            <span style={{color: 'red'}}>{errors.password}{errors.passwordincorrect}</span>
          </div>


              <div className="form-group">
              <button type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue">Login</button>

              </div>
            </form>

          </div>
        </div>
      </div>
    </section>





      </>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);