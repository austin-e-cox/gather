import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    this.props.registerUser(newUser, this.props.history);
  }


  render() {
    const { errors } = this.state;

    return (
      <div>

      <form action="#" className="bg-white rounded pb_form_v1">
              <h2 className="mb-4 mt-0 text-center">Sign Up for Free</h2>
              
              <div className="form-group">
                <input type="text" className="form-control pb_height-50 reverse" placeholder="Full name"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control pb_height-50 reverse" placeholder="Email"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control pb_height-50 reverse" placeholder="Password"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control pb_height-50 reverse" placeholder="Confirm password"/>
              </div>
             
              <div className="form-group">
                <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Register"/>
              </div>
        </form>
      
    
        <form noValidate onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              className={classnames('', {
                invalid: errors.name
              })}
            />
            <span style={{color: 'red'}}>{errors.name}</span>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames('', {
                invalid: errors.email
              })}
            />
            <span style={{color: 'red'}}>{errors.email}</span>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={this.handleChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames('', {
                invalid: errors.password
              })}
            />
            <span style={{color: 'red'}}>{errors.password}</span>
          </div>
          <div>
            <label htmlFor="password2">Confirm Password</label>
            <input
              onChange={this.handleChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              className={classnames('', {
                invalid: errors.password2
              })}
            />
            <span style={{color: 'red'}}>{errors.password2}</span>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));