import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      loading: false,
    }
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  UNSAFE_componentWillMount() {
    this.setState({ loading: true })
    axios.get('/api/groups')
      .then(groups => {
        this.setState({ groups: groups.data });
      })
      .then(this.setState({ loading: false }))
      .catch(err => console.log(err));
  }

  render() {
    const { user } = this.props.auth;
    return (
      <>
        {
          this.state.loading === true
          ?
            <p>loading...</p>
          :
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
                    </div>
                  </div>
                    {
                      this.state.groups.map(group => (
                        <Link key={group._id} to="/chat" style={{textDecoration: 'none', listStyle: 'none'}}>
                          <div className="col-sm-3 align-self-center" style={{minWidth: '300px'}}>
                            <form action="#" className="bg-light rounded pb_form_v1">
                              <h2 className="mb-4 mt-0 text-center">{group.groupName}</h2>
                              <div className="form-group">
                                <ul>
                                  <li>Active Users: {group.activeUsers}</li>
                                  <li>Latest Message: {group.chatLog[0]}</li>
                                </ul>
                              </div>
                            </form>
                          </div>
                        </Link>
                      ))
                    }
                </div>
              </div>
            </section>
        }
      </>
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