import React, { Component } from "react";
import "./index.css";

export default class Services extends Component {
  render() {
    return (
      <>
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}

        {/* sms  */}

        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 mb-3">
                <h1 className="services-head1 mb-3">Our Services</h1>
              </div>

              <div className="col-12 col-lg-6  mb-3">
                <p className="wms-desc">
                  A complete solution for backend emission quality monitoring!
                </p>
                <h1 className="wms-head mb-3">
                  Online Continuous Emission Monitoring Application
                </h1>
                <p className="mb-0 wms-desc">Connect EBHOOM Application with any Global OCEMS</p>
                <p className="mb-0 wms-desc">Start your 14 days free trial</p>
                <p className="mt-0 wms-desc">Get started with trial MODEL today</p>
                <div className="d-flex align-items-center mb-2">
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Your Email address"
                  />
                  <button className="demo-button ">Request Demo</button>
                </div>
                <p className="wms-desc">
                  Already using our service?{" "}
                  <a href="http://www.admin.ebhoom.com" target="__blank">
                    SignIn
                  </a>
                </p>
              </div>

              <div className="col-12 col-lg-6 text-center">
                <img className="wms-img w-75 " src="assets/images/wms.png" />
              </div>
            </div>
          </div>
        </div>
        {/* wms ends */}

        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}

         {/* go green  */}

         <div>
          <div className="container">
            <div className="row">
             
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mb-3">
                <h1 className="go-green mb-3">
                  PURE <span className="text-green">LIFE</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-circle-fill mt-3"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                </h1>
              </div>
              <div className="col-12 col-lg-6  text-center">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="https://youtu.be/shTSzR2weIQ?si=0D_CBden5UcLHoJk"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* go green ends */}

        {/* divider */}
        <div className="p-5"></div>
        <div className="p-4"></div>
        {/* divider */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="products-head mb-5">What we offer</h3>
            </div>

            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img1.png"
                alt="ebhoom"
              />

              <h4 className="services-head3">
                
              </h4>
              <p className="services-desc">
                {" "}
                
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img2.png"
                alt="ebhoom"
              />

              <h4 className="services-head3">
                Connect any emission monitoring systems of Air, Water & Noise to EBHOOM application
              </h4>
              <p className="services-desc">
                EBHOOM, is a real-time Emission quality monitoring system that can help you comply with the CPCB regulations. The data from EBHOOM can be submitted to the KSPCB in real time, which will help you to meet the requirements of the Board.
              </p>
              <p className="services-desc">
                Easy to use and maintain. 
                Compliant with CPCB and KSPCB regulations. 
                Helps to improve water quality management. 
                Reduces the risk of pollution.

              </p>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img3.png"
                alt="ebhoom"
              />

              <h4 className="services-head3"></h4>
              <p className="services-desc">
              
              </p>
              <p className="services-desc">
                
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img4.png"
                alt="ebhoom"
              />

              <h4 className="services-head3"></h4>
              <p className="services-desc">
                
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img5.png"
                alt="ebhoom"
              />

              <h4 className="services-head3">
                
              </h4>
              <p className="services-desc">
                
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img6.png"
                alt="ebhoom"
              />

              <h4 className="services-head3"></h4>
              <p className="services-desc">
                
              </p>
              <p className="services-desc">
                
              </p>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}
      </>
    );
  }
}
