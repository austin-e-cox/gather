import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('signup form, username:');
    console.log(this.state.username);
  }

  render() {
    return (
      <>
        <h1>Signup Page</h1>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="submit"
        />
      </>
    );
  }
};

export default Signup;