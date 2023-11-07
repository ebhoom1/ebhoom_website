import React, { Component } from "react";
import "./index.css";

export default class Products extends Component {
  render() {
    return (
      <>
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}

        {/* services  */}

        <div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mb-3">
                <h1 className="services-head1 mb-3">Our Products</h1>
              </div>

              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                <h3 className="wms-head2">
                  Online Continuous Emission Monitoring System
                </h3>
                <p className="wms-desc">
                  We help STPs to comply with government regulations
                
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* services ends */}

        {/* divider */}

        <div className="p-5"></div>
        {/* divider */}
        {/* products  */}

        <div id="wms">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6  mb-3">
                <h1 className="wms-head mb-3 text-blue">
                  EBHOOM Water Treatment Management System
                </h1>
                <p className="wms-desc">
                  A complete solution for backend monitoring and control of your
                  treatment plant
                </p>

                <p className="wms-desc">
                  Already using our product?{" "}
                  <a href="https://admin.ebhoom.com" target="__blank">
                    SignIn
                  </a>
                </p>
              </div>

              <div className="col-12 col-lg-6 text-center">
                <img className="wms-img w-75 " src="public/assets/images/ebhoom-flyer.jpg" />
              </div>
            </div>
          </div>
        </div>
        {/* products */}

        {/* divider */}
        <div className="p-5"></div>

        {/* divider */}

        {/* product features  */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="products-head mb-5">Features</h3>
            </div>

            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/strainers.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">
                  Regular reminder for filter Backwash &amp; Rinse
                </h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/pump.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">
                  Controls water supply through App
                </h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/water-level.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Monitors tank levels</h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/wifi3.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">WiFi Connectivity</h4>
              </div>
            </div>

            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/quality.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">
                  Checks water quality:{" "}
                  <span className="fw-bold text-blue">
                    pH, Temperature, TDS, Turbidity, BOD, COD
                  </span>
                </h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/booking.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Easy operation</h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/water-waves.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Displays flowrates</h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/24-hours.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">24 hours Monitorning</h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/high-signal.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">In-build GSM internet</h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/auto.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Automatic &amp; Manual mode</h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/database.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Datas are saved</h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/worker.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">
                  Reduces Manpower &amp; saves money
                </h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/dashboard.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">
                  Monitored easily by each higher authorities &amp; staff
                  attendence with locator
                </h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/cross-platform.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Web App &amp; Mobile App</h4>
              </div>
            </div>
          </div>
        </div>

        {/* product features  */}

        

         {/* divider */}
         <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}

         {/* go green  */}

         
    
          
      
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '40vh',
      }}
    >
      <div className="col-12 col-lg-6  text-center">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="https://www.youtube.com/embed/shTSzR2weIQ?rel=0"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
             </div>
          
        {/* go green ends */}

        {/* divider */}
        <div className="p-5"></div>
        <div className="p-4"></div>
        {/* divider */}

        {/* product features  */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="products-head mb-5">
                Choose a model that suites you
              </h3>
            </div>

            <div className="col-12 col-lg-6 d-flex align-items-start blue-card mb-3">
              <div className="blue-box">
                <h3 className="blue-box-head">MODEL P</h3>
                <ul className="blue-box-list">
                  <li>BOD, COD parameters</li>
                  <li>Upto 16 control pump control</li>
                  <li>Upto 10 flow rates</li>
                  <li>Upto 10 tank levels</li>
                  <li>Operator tracker and attendance register</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-6 d-flex align-items-start blue-card mb-3">
              <div className="blue-box">
                <h3 className="blue-box-head">MODEL H</h3>
                <ul className="blue-box-list">
                  <li>Upto 16 control pump control</li>
                  <li>Upto 8 flow rates</li>
                  <li>Upto 8 tank levels</li>
                  <li>Operator tracker and attendance register</li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-lg-6 d-flex align-items-start blue-card mb-3">
              <div className="blue-box">
                <h3 className="blue-box-head">MODEL M</h3>
                <ul className="blue-box-list">
                  <li>Upto 8 control pump control</li>
                  <li>Upto 4 flow rates</li>
                  <li>Upto 4 tank levels</li>
                  <li>Operator tracker and attendance register (Optional)</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-start blue-card mb-3">
              <div className="blue-box">
                <h3 className="blue-box-head">MODEL L</h3>
                <ul className="blue-box-list">
                  <li>Upto 2 control pump control</li>
                  <li>Upto 2 flow rates</li>
                  <li>Upto 2 tank levels</li>
                  <li>Operator tracker and attendance register (Optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="p-5"></div>
        <div className="p-2"></div>
        {/* divider */}

        {/* full service  */}

        <div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="products-head mb-5">
                  Treatment Technology Equipments
                </h3>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/circuit.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Hardware development</h4>
                  <p className="services-desc">
                    Treatment technology development competencies with
                    state-of-art technology
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/factory.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Manufacturing</h4>
                  <p className="services-desc">
                    Scalable production capacities to capture market dynamics
                    and increasing growth rates
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/settings.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">
                    Installation and maintenance
                  </h4>
                  <p className="services-desc">
                    All India partner network for the installation and
                    maintenance of network connections, civil engineering and
                    project management tools
                  </p>
                </div>
              </div>

              {/* divider */}

              <div className="p-2"></div>
              {/* divider */}

              <div className="col-12">
                <h3 className="products-head mb-5">
                  IT Services and Solutions
                </h3>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/computer.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Software development</h4>
                  <p className="services-desc">
                    IT front-/back-end development competencies to develop
                    comprehensive software solution
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/wifi2.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Software as a Service</h4>
                  <p className="services-desc">
                    Infrastructure resources and volume to provide scalable and
                    economical software services
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/globe.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Network operations</h4>
                  <p className="services-desc">
                    The EBHOOM CMS portal, a network operation centre to
                    exercise global waste water quality monitoring, control and
                    management
                  </p>
                </div>
              </div>

              {/* divider */}

              <div className="p-2"></div>
              {/* divider */}

              <div className="col-12">
                <h3 className="products-head mb-5">
                  Value Added Smart Services
                </h3>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/pay.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Payment and billing</h4>
                  <p className="services-desc">
                    PCÍ data security-compliant payment processing and billing
                    for seamless services
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/search.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Future smart service</h4>
                  <p className="services-desc">
                    In-depth market expertise to capture trends and market
                    demands
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/monitor.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Data analytics and services</h4>
                  <p className="services-desc">
                    Big data and advanced analytics capabilities to offer and
                    enable data services, such as POI, scores, predictive
                    maintenance and utilisation
                  </p>
                </div>
              </div>

              {/* divider */}

              <div className="p-5"></div>
              <div className="p-3"></div>
              {/* divider */}

              <div className="col-12">
                <h3 className="products-head mb-5">
                  EBHOOM Turnkey Approach to Treatment Plant!
                </h3>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/sketch.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Site Qualification</h4>
                  <p className="services-desc">
                    We offer industry leading service
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/motherboard.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Choice of Hardware</h4>
                  <p className="services-desc">
                    Partnerships in leading hardware providers, offering the
                    latest in treatment technology
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/technology.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">
                    Engineering and Installation
                  </h4>
                  <p className="services-desc">
                    Big data and advanced analytics capabilities to offer and
                    enable data services, such as POI, scores, predictive
                    maintenance and utilisation
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/app-development.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">
                    Operator Mobile App and WebApp
                  </h4>
                  <p className="services-desc">
                    Our app allows operators to easily manage devices
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/list.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Commissioning</h4>
                  <p className="services-desc">
                    We make sure the EBHOOM control and monitor device meet your
                    project's operational requirements
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/network.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Network Software</h4>
                  <p className="services-desc">
                    Our network management software offers real-time access
                    management of your treatment plant
                  </p>
                </div>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/customer-service.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">
                    Customer Support and O&amp;M Sevices
                  </h4>
                  <p className="services-desc">
                    We have a variety of customer support packages to best suite
                    your ongoing service needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* full service  */}

        {/* divider */}

        <div className="p-5"></div>
        {/* divider */}
      </>
    );
  }
}
