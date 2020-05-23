import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../auth/Register';

const Landing = () => (
  <>
<<<<<<< HEAD
    <Link to="/register">Register</Link>
    <Link to="/login">Login</Link>
=======
   
>>>>>>> e0c814cee6d176e060e334e2bf705f1c7311d8a8

    <section className="pb_cover overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light" id="section-home">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6">
            <h2 className="heading mb-3">Gather together!</h2>
            <div className="sub-heading">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fuga repellendus impedit, repellat deleniti, ipsum nobis quia debitis perspiciatis beatae obcaecati dolorem, architecto fugit quas. Totam sapiente quia maiores quisquam?
              </p>
              <p className="mb-5"><a className="btn btn-success btn-lg pb_btn-pill " href="#"><span className="pb_font-14 text-uppercase pb_letter-spacing-1">Sign in</span></a></p>
            </div>
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-5 relative align-self-center">

<<<<<<< HEAD
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
                <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Register"/>
              </div>
            </form>
=======
        <Register/>
>>>>>>> e0c814cee6d176e060e334e2bf705f1c7311d8a8

          </div>
        </div>
      </div>
    </section>



  </>
);

export default Landing;
