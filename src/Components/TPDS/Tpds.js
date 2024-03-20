import React, { useEffect } from 'react';
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { BiCheckCircle } from 'react-icons/bi';

const Tdps = () => {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
    }, []);

    return (
        <>
            {/* Hero */}
            <section id="hero" className="d-flex align-items-center justify-content-center">
                <div className="container" data-aos="fade-up">
                    <div className="row justify-content-center" data-aos="fade-up">
                        <div className="col-xl-6 col-lg-8">
                            <h2>Unified Real Time Monitoring and</h2>
                            <h2>Analytics Platform for Pollution Control</h2>
                        </div>
                        <div>
                            <Link to="/contact" target="_blank">
                                <button className="learn-more-button" type="button">
                                    Request Demo
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Hero */}
            {/* about */}
            <div className="container">
                <div className="row">
            <div className="col-12">
              <h3 className="wms-head2" style={{marginTop:"20px"}}>Ebhoom </h3>
            </div>
            <div className="col-12 col-lg-7 mb-3">
              <p className="wms-desc mb-3">
              Ebhoom is Real-Time Data Acquisition, Monitoring and Analytics suite of Products for Industrial Emissions, Effluent Discharges and Ambient Air Monitoring. Ebhoom DAS Software, 
              Ebhoom Server Platform, Ebhoom Environ Data Logger provides a comprehensive solution for all Industry Environmental needs.

                Ebhoom Client data acquisition software provides direct integration with any analyzer (make or model) using RS232/RS485/Modbus/Ascii Protocols etc. Ebhoom Clients provide secured encrypted data communication with Central Server using open REST based API or MQTT based protocols.

                Ebhoom Environment provides wireless data logger which eliminates the need for PC for client side data logging and can transmit data using LAN/Wifi/ GPRS etc. The wireless data logger provides capability to integrate with any of the standard industry analyzers using RS232/RS485 interface.

                Ebhoom Mobile Application provides up-to the minute information on the data in Ebhoom platform for industry and regulator consumption. The mobile application needs secured login credentials for viewing the data.

                Ebhoom Central Server platform provides a common software for pollution board to collect data from various industries using Open API. Apart from this the software provides pre-build reports,alarms and alerts as per the regulatory standards prescribed by various regulatory authorities.The Ad-hoc reporting module provides capability to analyze the data up-to 2 second granularity over the collected parameters and provide forecasting using Holt-Winters forecast models
              </p>
            </div>

            <div className="col-12 col-lg-5 mb-3 text-center">
              <img
                className="cover-img"
                src="assets/images/products/TPDS-cover.jpg"
                alt="ebhoom"
              />
            </div>
          </div>
        </div>
            {/* End about */}
           {/* Product description */}
           <section id="products" className="products">
            <div className="container" data-aos="fade-up">
            <h3 className="products-head mb-5">
                 Products
                </h3>
                <div className="row">
                    <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up">
                        <div className="icon"><img src="/assets/images/icon/tdps/data-science.png" alt="" /></div>
                        <h4 className="title"><a href="">Data Acquisition</a></h4>
                        <ul className="description">
                          <li><BiCheckCircle className='icon-bullet' /> Supports any digital analyser make and models over RS232/RS485/Modbus protocols</li>
                          <li><BiCheckCircle className='icon-bullet' />Seamless support for analog analyser with 4-20mA, 0-10V etc.</li>
                          <li><BiCheckCircle className='icon-bullet' />Supports any industrial grade Ambient, Effluent and Emission monitoring analysers.</li>
                        </ul>

                    </div>
                    <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon"><img src="/assets/images/icon/tdps/dashboard.png" alt="" /></div>
                        <h4 className="title"><a href="">Data Management</a></h4>
                        <ul className="description">
                          <li><BiCheckCircle className='icon-bullet' />State-of-the-art software with cloud and on premise deployment</li>
                          <li><BiCheckCircle className='icon-bullet' />Browser based Interactive User Interface</li>
                          <li><BiCheckCircle className='icon-bullet' />Integrated workflow for seamless communication between Industry and Regulator.</li>
                        </ul>                    </div>
                    <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon"><img src="/assets/images/icon/tdps/mobile-development.png" alt="" /></div>
                        <h4 className="title"><a href="">Mobile App</a></h4>
                        <ul className="description">
                          <li><BiCheckCircle className='icon-bullet' />Provides real time data from industry emission on mobile using secured login.</li>
                          <li><BiCheckCircle className='icon-bullet' />Real Time Alerts and Alarms available on the mobile.</li>
                          <li><BiCheckCircle className='icon-bullet' />Real Time charts, Average value with prescribed limits.</li>
                        </ul>                    </div>
                    <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon"><img src="/assets/images/icon/tdps/report.png" alt="" /></div>
                        <h4 className="title"><a href="">Reporting</a></h4>
                        <ul className="description">
                          <li><BiCheckCircle className='icon-bullet' />Pre-configured reports as per Regulatory requirements.</li>
                          <li><BiCheckCircle className='icon-bullet' />Ad-hoc reporting and analytics on all captured data with interactive dashboards.</li>
                          
                        </ul>                   
                         </div>
                         <div className="d-flex justify-content-center">
                         <div className="col-lg-6 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon"><img src="/assets/images/icon/tdps/data-analysis.png" alt="" /></div>
                        <h4 className="title"><a href="">Data Analysis</a></h4>
                        <ul className="description">
                          <li><BiCheckCircle className='icon-bullet' />Parameter limits and rules pre-configured as directed by Central Pollution Control Board.</li>
                          <li><BiCheckCircle className='icon-bullet' />Live Alerts and Alarms on all monitored parameters.</li>
                          <li><BiCheckCircle className='icon-bullet' />Highly Scalable to handle 10 thousand+ analysers connected over real time with 2 second monitoring.</li>
                          <li><BiCheckCircle className='icon-bullet' />Support wind rose projections on measured parameter.</li>
                          <li><BiCheckCircle className='icon-bullet' />Support Forecasting models on any measured parameters.</li>
                        </ul>                   
                         </div>
                         </div>
                </div>
            </div>
        </section>
           {/* End Product description */}
              {/* divider */}
              <div className="p-5"></div>
              <div className="p-3"></div>
              {/* divider */}
           {/* OCEM */}
           
        <section>
          <div className="container">
            <div className="row">

              <div className="col-12">
                <h3 className="products-head mb-5">
                  EBHOOM <strong className='text-green'>TPDS</strong> for <strong className='text-green'>OCEMS</strong>
                </h3>
        
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3">
                <img
                  className="w-25"
                  src="assets/images/icon/sketch.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head ">Calibration</h4>
                  <p className="services-desc">
                    Monthly callibration service with <strong>EBHOOM</strong> buffer solution.
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
                  <h4 className="services-head">Calibration History</h4>
                  <p className="services-desc">
                    Reports of each calibration.
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
                    Alerts
                  </h4>
                  <p className="services-desc">
                   Get notified every time there's a relevant unread update.
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
                   Performance Monitoring
                  </h4>
                  <p className="services-desc">
                    Sensor calibration monitoring and saves the history of calibration
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
                  <h4 className="services-head">Dashboard</h4>
                  <p className="services-desc">
                    Showcase recent values in the module and the latest value charts.
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
                  <h4 className="services-head">Admin Panel and Analytics</h4>
                  <p className="services-desc">
                    User Management <br />
                    CMS Intergration
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
                    Users &amp; Accounts
                  </h4>
                  <p className="services-desc">
                   Allow users to browse through the app and check out their emission quality.
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
                    Report
                  </h4>
                  <p className="services-desc">
                  Generate reports and create daily, weakly or monthly snippets of the most significant metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

           {/* End OCEM */}
            {/* divider */}
            <div className="p-5"></div>
              <div className="p-3"></div>
              {/* divider */}r
        </>
    );
}

export default Tdps;
