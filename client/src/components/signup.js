import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('signup form, username:');
    console.log(this.state.username);
    axios.post('/', {
      username: this.state.username,
      password: this.state.password
    })
      .then(response => {
        console.log(response);
        if (response.data) {
          console.log('Successful Signup');
          this.setState({
            redirectTo: '/login'
          });
        } else {
          console.log('Signup Error');
        }
      })
      .catch(error => {
        console.log('Server Signup Error');
        console.log(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
          type="submit" value="Submit" />
      </form>
    );
  }
};

export default Signup;