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
                  A complete solution for backend monitoring and control of your
                  treatment plant
                </p>
                <h1 className="wms-head mb-3">
                  Interactive Treatment Control System
                </h1>
                <p className="mb-0 wms-desc">Start your 14 days free trial</p>
                <p className="mt-0 wms-desc">Get started with MODEL L today</p>
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
                  <a href="http://www.wms.ebhoom.com" target="__blank">
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
                    src="https://www.youtube.com/embed/Nzti7jsNuGQ?rel=0"
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
                Sewage and Effluent Treatment plant
              </h4>
              <p className="services-desc">
                {" "}
                Our water disposal technologies will treat the waste/effluent
                water making it suitable for disposal and prevent the
                contamination of ground, ground water and other water resources.
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img2.png"
                alt="ebhoom"
              />

              <h4 className="services-head3">
                Operations and maintenance for STP and ETP
              </h4>
              <p className="services-desc">
                Modular, Pre-fabricated/Skid mounted/totally underground design
                for apartments, Hotels and hospitals
              </p>
              <p className="services-desc">
                Operation And Maintenance Service For STP/ETP/RO
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img3.png"
                alt="ebhoom"
              />

              <h4 className="services-head3">Anaerobic Digestor</h4>
              <p className="services-desc">
                Biogas Production, Food &amp; animal waste disposal, Fertilizer
                manure
              </p>
              <p className="services-desc">
                Erected on households, Residential complexes, farms and other
                commercial establishments that generate waste
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img4.png"
                alt="ebhoom"
              />

              <h4 className="services-head3">Incinerator</h4>
              <p className="services-desc">
                Reduce 95% of the waste by using controlled air combustion into
                pure ash within minutes. compactness ensure minimal space
                requirements. Used in households, industries, warehouses,
                hospitals and other establishments.
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img5.png"
                alt="ebhoom"
              />

              <h4 className="services-head3">
                Waste collection &amp; recycling
              </h4>
              <p className="services-desc">
                Waste Management is on a mission to maximize resource value.
                while minimizing - and even eliminating - environmental impact
                so that both our economy and our environment can thrive.
                Industrial, residential and commercial establishments can make
                their day to day operations better, when they have an efficient
                waste management system.
              </p>
            </div>
            <div className="col-12 col-lg-4 mb-3">
              <img
                className="img-fluid mb-3"
                src="assets/images/products/img6.png"
                alt="ebhoom"
              />

              <h4 className="services-head3">Ecology restoration</h4>
              <p className="services-desc">
                Ecology restoration refers to the
                rehabilitation,reclamation,recreation and recovery of degraded
                lands.
              </p>
              <p className="services-desc">
                We implement this on different levels ( Urban gardening -
                Reforestation - Land scaping - recreation of wetlands - acid
                lake nutralization )
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
