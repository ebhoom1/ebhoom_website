import React, { Component, useEffect } from "react";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const  Products=()=>{
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  const multiparameter=[
    {
      sensor:"Measuring Principle",
      paramenter:"UV VIS Dual Beam Technology - Attenuation, transmission"
    },
    {
      sensor:"Measuring Range ",
      paramenter:"see list of parameters"
    },
    {
      sensor:"optical path ",
      paramenter:"0.3 mm, 1 mm, 2 mm, 5mm, 10 mm, 50mm"
    },
    {
      sensor:"Parameters",
      paramenter:"SAC CODeq, BODeq, TOCeq, UVT, Turb 530, TSS"
    },
    {
      sensor:"Accuracy",
      paramenter:".2%"
    },
    {
      sensor:"Reaction time T100 ",
      paramenter:"4s"
    },
    {
      sensor:"Housing material ",
      paramenter:"Stainless steel (1.4571/14404) or titanium (3.7035)"
    },
    {
      sensor:"Cable Length",
      paramenter:"500 cm"
    },
    {
      sensor:"Calibration interval ",
      paramenter:"24 months"
    },
    {
      sensor:"Power Supply ",
      paramenter:"230VAC Nominal"
    },
    {
      sensor:"Consumption",
      paramenter:"60W Max"
    },
    {
      sensor:"Warranty",
      paramenter:"1 year"
    },
  ]
  const ph=[
    {
      sensor:"Measuring Principle ",
      ph:"pH : Electrode & Potentiometric",
    },
    {
      sensor:"Measuring Range",
      ph:"pH: 0 –14 pH",
    },
    {
      sensor:"Accuracy",
      ph:"± 0.1pH (25 ℃)",
    },
    {
      sensor:"Response Time",
      ph:"≤60 Seconds",
    },
    {
      sensor:"Cable length",
      ph:"500 cm",
    },
    {
      sensor:"Power Supply",
      ph:"230VAC Nominal",
    },
    {
      sensor:"Consumption",
      ph:"60W Max",
    },
    {
      sensor:"Warranty",
      ph:"1 year",
    },
  ]
  const analyserCabinet=[
    {
      sensor:"Communication ",
      abs:"RS485 Modbus /Wifi/GPRS/ Ethernet",
    },
    {
      sensor:"Power supply",
      abs:"12 V DC",
    },
    {
      sensor:"Warranty ",
      abs:"2 years",
    },
    {
      sensor:"Consumption",
      abs:"60W Max",
    },

  ]
    return (
      <>
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}

          {/* Our Producrts */}
          <div className="container">
          <div className="row">
            <div className="col-12 "data-aos="zoom-in">
              <h3 className="products-head mb-5">Our Products</h3>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <h4 className="services-head3  "data-aos="fade-down">
            Online Continuous effluent Monitoring System
              </h4>
              <h4 className="services-head3  "data-aos="fade-down">
              Complete sollution for backend montioring of <strong className="text-green">Water</strong>.
              </h4>
              <p className="services-desc"data-aos="fade-up">
              A complete solution for backend monitoring and control of your
                  treatment plant              </p>
              <p className="services-desc"data-aos="fade-down">
              Already using our product?{" "}
                  <button className="learn-more-button-product" type="button">
                  <a href="https://admin.ebhoom.com" target="__blank">
                    SignIn
                  </a>
                  </button>

              </p>
            </div>
          </div>
           </div>
          <div className="container">
            <div className="row justify-content-center">
             <div className="col-lg-6 col-md-8 col-sm-10"data-aos="zoom-in">
              <img src="assets/images/products/Products-cover.jpg" className="img-fluid " alt="Centered Image" />
              </div>
            </div>
           </div>
          {/* End Our Products */}
       

        {/* divider */}

        <div className="p-5"></div>
        {/* divider */}
       

        {/* divider */}
        <div className="p-5"></div>

        {/* divider */}

        {/* product features  */}

        <div className="container">
          <div className="row">
            <div className="col-12"data-aos="zoom-out">
              <h3 className="products-head mb-5">Features</h3>
            </div>

            {/* <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
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
            </div> */}
            {/* <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
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
            </div> */}
            {/* <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/water-level.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Monitors tank levels</h4>
              </div>
            </div> */}
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4"data-aos="fade-out">
              <img
                className="w-25"
                src="assets/images/icon/wifi3.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">WiFi Connectivity</h4>
              </div>
            </div>

            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4"data-aos="fade-out">
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
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4"data-aos="fade-out">
              <img
                className="w-25"
                src="assets/images/icon/booking.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Easy operation</h4>
              </div>
            </div>
            {/* <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/water-waves.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Displays flowrates</h4>
              </div>
            </div> */}
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4"data-aos="fade-out">
              <img
                className="w-25"
                src="assets/images/icon/24-hours.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">24 hours Monitorning</h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4"data-aos="fade-out">
              <img
                className="w-25"
                src="assets/images/icon/high-signal.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">In-build GSM internet</h4>
              </div>
            </div>
            {/* <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4">
              <img
                className="w-25"
                src="assets/images/icon/auto.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Automatic &amp; Manual mode</h4>
              </div>
            </div> */}
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4"data-aos="fade-out">
              <img
                className="w-25"
                src="assets/images/icon/database.png"
                alt="ebhoom"
              />
              <div className="ps-2">
                <h4 className="services-head">Datas are saved</h4>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4"data-aos="fade-out">
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
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4"data-aos="fade-out">
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
            <div className="col-12 col-lg-3 d-flex align-items-start service-card mb-4"data-aos="fade-out">
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
          <div className="col-12"data-aos="fade-out">
            <h3 className="products-head mb-5">
              Choose a model that suits you
            </h3>
          </div>

          <div className="col-12 col-lg-6 d-flex align-items-start blue-card mb-3"data-aos="fade-out">
            <div className="blue-box">
              <h3 className="blue-box-head">OCEMS MARS</h3>
              <ul className="blue-box-list">
                <li>BOD, COD, TSS, Turbidity, pH parameters</li>
                <li>TUV Certified UV-VIS dual beam sensor</li>
                <li>1 year on-site warranty</li>
                <li>1 year free software subscription</li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex align-items-start blue-card mb-3"data-aos="fade-out">
            <div className="blue-box">
              <h3 className="blue-box-head">DATA LOGGER</h3>
              <ul className="blue-box-list">
                <li>TRANSFER PLC/Flow meter data using serial communication</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 mx-auto d-flex align-items-start blue-card mb-3"data-aos="fade-out">
            <div className="blue-box">
              <h3 className="blue-box-head">Software subscription</h3>
              <ul className="blue-box-list">
                <li>Connect OCEMS</li>
                <li>Connect PLC/flowmeter</li>
                <li>₹749 including GST.</li>
              </ul>
            </div>
          </div>
        </div>
        </div>
         {/*End product features  */}
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-2"></div>
        {/* divider */}

        {/* full service  */}

        <div>
          <div className="container">
            <div className="row">
              <div className="col-12"data-aos="fade-out">
                <h3 className="products-head mb-5">
                  Treatment Technology Equipments
                </h3>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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
                <h3 className="products-head mb-5"data-aos="fade-out">
                  IT Services and Solutions
                </h3>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
                <img
                  className="w-25"
                  src="assets/images/icon/globe.png"
                  alt="ebhoom"
                />
                <div className="ps-2">
                  <h4 className="services-head">Network operations</h4>
                  <p className="services-desc">
                    The EBHOOM CMS portal, a network operation centre to
                    exercise global pollution monitoring, control and
                    management
                  </p>
                </div>
              </div>

              {/* divider */}

              <div className="p-2"></div>
              {/* divider */}

              <div className="col-12"data-aos="zoom-in">
                <h3 className="products-head mb-5">
                  Value Added Smart Services
                </h3>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12"data-aos="zoom-in">
                <h3 className="products-head mb-5">
                  EBHOOM Turnkey Approach to Treatment Plant!
                </h3>
              </div>

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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

              <div className="col-12 col-lg-4 d-flex align-items-start service-card mb-3"data-aos="fade-out">
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
        <>
       {/* divider */}
       <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}
    <div className="container 1">
    <div className="col-12 "data-aos="zoom-in">
              <h3 className="products-head mb-5">Technical specifications - Multi Parameter Sensor</h3>
            </div>
      <div className="row">
        {/* Left Side: Image */}
        <div className="col-lg-6"data-aos="zoom-in">
          <img src="/assets/images/Ebhoom/18.jpg" alt="Your Image" className="table-img" />
        </div>

        {/* Right Side: Table */}
        <div className="col-lg-6">
        
          <table className="table"data-aos="zoom-out">
            <thead>
           
              <tr>
                <th>Sensor</th>
                <th>Multi parameter</th>
              </tr>
            </thead>
           
              <tbody>
              {multiparameter.map((item)=>(
              <tr>
                <td>{item.sensor}</td>
                <td>{item.paramenter}</td>
              </tr>
               ))}
              </tbody>
           
           
          </table>
        </div>
      </div>
    </div>
    {/* divider  */}
    <div className="p-5"></div>
    {/* divider */}
   
    <div className="container 2">
    <div className="col-12 "data-aos="zoom-in">
              <h3 className="products-head mb-5">Technical specifications - pH Sensor</h3>
            </div>
      <div className="row">
        {/* Left Side: Image */}
        <div className="col-lg-6"data-aos="zoom-in">
          <img src="/assets/images/Ebhoom/12.png" alt="Your Image" className="table-img" />
        </div>

        {/* Right Side: Table */}
        <div className="col-lg-6">
        
          <table className="table"data-aos="zoom-out">
            <thead>
           
              <tr>
                <th>Sensor</th>
                <th>pH</th>
              </tr>
            </thead>
           
              <tbody>
              {ph.map((item)=>(
              <tr>
                <td>{item.sensor}</td>
                <td>{item.ph}</td>
              </tr>
                ))}
              </tbody>
          
           
          </table>
        </div>
      </div>
    </div>
    {/* divider  */}
    <div className="p-5"></div>
    {/* divider */}
    <div className="container 3">
    <div className="col-12 "data-aos="zoom-in">
              <h3 className="products-head mb-5">Technical specifications - Analyser cabinet</h3>
            </div>
      <div className="row">
        {/* Left Side: Image */}
        <div className="col-lg-6"data-aos="zoom-in">
          <img src="/assets/images/device_1.jpg" alt="Your Image" className="table-img" />
        </div>

        {/* Right Side: Table */}
        <div className="col-lg-6">
        
          <table className="table"data-aos="zoom-out">
            <thead>
           
              <tr>
                <th>SensorData collection hub & Display Cabinet</th>
                <th>ABS make</th>
              </tr>
            </thead>
            
              <tbody>
              <tr>
                <td>Display </td>
                <td>2" LCD display</td>
              </tr>
              <tr>
                <td>Data Transfer features</td>
                <td>
                  <ul>
                    <li>PDF/Excel report from Server</li>
                    <li>All parameters shall be displayed on Display and software accessible through dedicated username and Password</li>
                    <li>Cloud based DATA logger is used to transfer data to CPCB/ SPCB Portal</li>
                    <li>Visual alarm shall be activated when the status increases above set limit (Optional).</li>
                    <li>Additional custom features as required by the user (Optional)</li>
                  </ul>
                </td>
              </tr>
              {analyserCabinet.map((item)=>(
              <tr>
                <td>{item.sensor}</td>
                <td>{item.abs}</td>
              </tr>
              ))}
              </tbody>
            
           
          </table>
        </div>
      </div>
    </div>
      {/* divider */}
      <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}
       

    <div className="container 4">
  <div className="col-12 " data-aos="zoom-in">
    <h3 className="products-head mb-5">Installation & Commissioning</h3>
  </div>
  <div className="row justify-content-center"> {/* Center the row */}
    <div className="col-lg-6" data-aos="zoom-in">
      {/* Center the content within the column */}
      <div className="text-center">
        <ol>
          <li>Connect the pH sensor in pipeline and multi parameter sensor in open tank</li>
          <li>Fix the wall mount and insert the butterfly behind the WWOCEMS24.</li>
          <li>Plug the DC charger adapter.</li>
          <li>Check the display switch.</li>
          <li>Check the Internet connectivity.</li>
          <li>Call customer support for new user registration.</li>
          <li>View the quality results on App with login credentials.</li>
        </ol>
      </div>
    </div>
  </div>
</div>

     {/* divider */}
     <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}
    </>
      </>
    );
  }
export default Products;
