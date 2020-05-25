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
              Welcome to Gather. A social exprience that makes it easy and fun for everyone to connect on multiple levels. 
              No matter what your interests are or where you are from, we want to make it easy for you to find and interact with other people 
              who share common or maybe sometimes not so common, interests. Gather is a place to not only explore what makes us all different, 
              but to discover new and exciting ideas that can bring us together. 
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
