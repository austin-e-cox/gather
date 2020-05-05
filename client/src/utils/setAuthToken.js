import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Apply authToken to every request if logged in...
    axios.defaults.headers.common['Authorization'] = token;

    // Delete auth header...
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
