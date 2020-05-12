import React from 'react';
import { Link } from 'react-router-dom';
import Register from '../auth/Register';

const Landing = () => (
  <>
   

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

        <Register/>

          </div>
        </div>
      </div>
    </section>



  </>
);

export default Landing;
