import React from 'react';
import { Link } from 'react-router-dom';

const Interest = () => {
  return(
  <>
   

    <section className="pb_cover overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light" id="section-home">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-3">
            <h2 className="heading mb-3">Almost There!</h2>
            <div className="sub-heading">
              <p className="mb-4">
                 Thank you for taking the time to fill out your interests. Based on your selections, here are some suggestions to get started!
              </p>
            </div>
          </div>
          <div className="col-md-1">
          </div>
          <div className="col-md-8 relative align-self-center">

            <form action="#" className="bg-white rounded pb_form_v1">
              <h2 className="mb-4 mt-0 text-left">Select your Interests</h2>
              <div className="checkbox">
                <label><input type="checkbox" value="">Health/Fitness></input></label>
              </div>
              
              <div class="checkbox">
                <label><input type="checkbox" value="">Gaming></input></label>
              </div>
              
              <div class="checkbox">
                <label><input type="checkbox" value="">Food</input></label>
              </div>

              <div className="checkbox">
                <label><input type="checkbox" value="">Music</input></label>
              </div>
              
              <div class="checkbox">
                <label><input type="checkbox" value="">Movies</input></label>
              </div>
              
              <div class="checkbox">
                <label><input type="checkbox" value="">Crafts</input></label>
              </div>
            
             
              <div className="form-group">
                <input type="submit" className="btn btn-primary btn-lg btn-block pb_btn-pill  btn-shadow-blue" value="Save"/>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>



  </>
  )
};

export default Interest;