import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    }
  }

  onChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    console.log(newUser);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <Link to="/">Back to Landing</Link>
        <p>Already have an account?<Link to="/login">Login</Link></p>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
            />
          </div>
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
          <div>
            <label htmlFor="password2">Confirm Password</label>
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

export default Register;