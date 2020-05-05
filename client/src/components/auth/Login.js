import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  }

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    }

    console.log(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <Link to="/">Back to Landing</Link>
        <p>Don't have an account?<Link to="/register">Register</Link></p>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Login;