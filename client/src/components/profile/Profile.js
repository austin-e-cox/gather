import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <section className="pb_cover overflow-hidden cover-bg-indigo cover-bg-opacity text-left pb_gradient_v1 pb_slant-light" id="section-home">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12">
            <div className="container bootstrap-snippet header-container">
              <div className="bg-white">
                <div className="container py-5">
                  <div className="media col-md-10 col-lg-8 col-xl-7 p-0 my-4 mx-auto">
                    <img src="https://cache.desktopnexus.com/thumbseg/623/623778-bigthumbnail.jpg" alt="" className="img-fluid rounded-circle" />
                    <div className="media-body ml-5">
                      <h4 className="font-weight-bold mb-4">Chuck Norris</h4>
                      <div className="text-muted mb-4">
                        Carlos Ray "Chuck" Norris (born March 10, 1940) is an American martial artist, actor, film producer and screenwriter. After serving in the United States Air Force, Norris won many martial arts championships and later founded his own discipline, Chun Kuk Do
                      </div>
                      <a href="#" className="d-inline-block text-dark">
                        <strong>777</strong>
                        <span className="text-muted">followers</span>
                      </a>
                      <a href="#" className="d-inline-block text-dark ml-3">
                        <strong>111</strong>
                        <span className="text-muted">following</span>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="m-0" />
                <ul className="nav nav-tabs tabs-alt justify-content-center">
                  <li className="nav-item">
                    <a className="nav-link py-4" href="/">Chats</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link py-4" href="/">Suggestions</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link py-4" href="/">Followers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link py-4" href="/">Following</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
