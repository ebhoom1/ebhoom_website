import React, { Component, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services=()=>{
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
 const parameter=[
    {
      item:"Step 1:",
      step:"Prepare different dilutions using Potassium Hydrogen Phthalate (KHP) with stock solution 1000ppm and check performance of instrument in respective dilutions. Calibrate optics of the system with the procedure detailed below."
    },
    {
      item:"Step 2:",
      step:"Prepare stock standard (1000ppm equivalent COD) in laboratory and store it in refrigerator. Stock is stable upto six months, if stored in refrigerator. Hence, as a safety margin, do not use stock older than five months in calibration and also do not use stocks, if exposed in environment because of any reason."
    },
    {
      item:"Step 3:",
      step:"Prepare working solution of nearly 1/3rd, 1/2, 2/3rd and 2 times of working range (i.e. COD levels expected in a plant) and perform the functional test on site within 24 hours."
    },
    {
      item:"Step 4:",
      step:"Verify the results and if not found within 5% of the range, perform functional check again."
    },
    {
      item:"Step 5:",
      step:"Submit middle dilution (of the range in use at plant) as sample for parallel COD measurements in lab along-with the samples."
    },
    

  ]
  const installationAndCalibration=[
   
    {
      item:"Step 4:",
      step:"Send samples for testing to a EPA recognized laboratory, which has participated in AQC, within last one year and has passed the AQC criteria successfully."
    },
    {
      item:"Step 5:",
      step:"Collect sample results within maximum seven days from the date of sampling.",
    },
    {
      item:"Step 6:",
      step:"Collect copy of certificate of Lab’s participation in AQC (as prescribed by CPCB) and its performance results in AQC, along-with the sample’s results each time either physically or electronically (email etc.)."
    },
    {
      item:"Step 7:",
      step:"Enter data of 12 (Twelve) Grab samples lab results of every parameter (pH, BOD, COD, TSS) into the OCEMS within seven days of sampling and maintain a record of calibration results entered in the OCEMS."
    },
    {
      item:"Step 8:",
      step:"Ensure that there are no previous calibration results entries in the system. If there are entries, remove all entries from the system. These entries have to be removed only at the first time calibration."
    },
    {
      item:"Step 9:",
      step:"While making calibration results entries, ensure that outliers (data points) as per given “Criteria of outliers” in this document, are not entered into the OCEMS."
    },
    {
      item:"Step 10:",
      step:"within next seven days from the first sampling date, Repeat the exercise again following steps 1 to 7 again."
    },
    {
      item:"Step 11:",
      step:"This time system should hold at-least total 15 valid calibration points (out of 24 data points) after calibration points entries."
    },
    {
      item:"Step 12:",
      step:"Compare results of composite sampling with average of continuous 15 minute values received through OCEMS for both days. The composite sample results should not be an outlier."
    },
    {
      item:"Step 13:",
      step:"If the system does not show Standard Error Mean (SEM) within prescribed criteria for any of the parameters, that particular parameter should be recalibrated, as per above procedure."
    },
    {
      item:"Step 14:",
      step:"As COD is the principal component of measurement of these instruments, cross checkresults of COD of the middle dilution, as sample. If not within 5% range of prepared working solution, perform function check again for COD parameter."
    },
    {
      item:"Step 15:",
      step:"Only (01) sample out of 24 samples (12 samples per day for two calibration days) shall be sent to SPCBs/PCCs or CPCB lab for cross check, while doing initial calibration of OCEMS in any industry. Sample should again be sent to SPCBs/PCCs or CPCB lab, when system fails in performance and is recommended for re-calibration. The SPCBs/PCCs or CPCB may accept sample only if it is preserved and transported following standard procedure. Report on basic installation and calibration of OCEMS at STPs should be sent to SPCBs/PCCs and CPCB."
    },
    {
      item:"Step 16:",
      step:"SPCBs/PCCs or CPCB will check the results of STPs sample received with online data and may ask for repeat of basic calibration, if found to be deviating more than acceptable error in standard laboratory method."
    }
  ]
  const validation=[
   
    {
      item:"Step 4:",
      step:"Sample should be given for testing to a EPA recognized laboratory only, which has participated in AQC - proficiency test, within last one year and has passed the criteria successfully."
    },
    {
      item:"Step 5:",
      step:"Collect result from laboratory within maximum seven days from the date of sampling. "
    },
    {
      item:"Step 6:",
      step:"Collect copy of certificate of Lab’s participation in AQC (as prescribed by CPCB) and its performance results in AQC, with the sample results each time either physically or electronically (email etc.)."
    },
    {
      item:"Step 7:",
      step:"Visit OCEMS and enter data point in the library- ensuring that outliers are not entered into the system. Now the system will have one entry added to library. These data points of calibration along-with global calibration value should be available at central portals of respective SPCB/PCC and CPCB."
    },
    {
      item:"Step 8:",
      step:"If data point is an outlier, data entry should not be made in OCEMS, instead repeat the process from step 1 to step 7 again on the same day by picking up the sample again."
    },
    {
      item:"Step 9:",
      step:"If two consecutive validation check samples fall out of range and remains outliers, recommend basic OCEMS calibration again through the supplier."
    }
  
  ]
const  PerformanceCheck=[
  {
    item:"Step 5:",
    step:"Sample should be given for testing in own laboratory or a EPA recognized laboratory only, which has participated in AQC- Proficiency Test, within last one year and has passed the criteria successfully."
  },
  {
    item:"Step 6:",
    step:"Collect result within maximum seven days from the date of sampling. "
  },
  {
    item:"Step 7:",
    step:"Collect copy of certificate of Lab’s participation in AQC (as prescribed by CPCB) and its performance results in AQC, with the sample results each time either physically or electronically (email etc.)."
  },
  {
    item:"Step 8:",
    step:"Visit OCEMS and enter data point in the library- ensuring that outliers are not entered into the system. Now the system will have more than 16 calibration points entries."
  },
  {
    item:"Step 9:",
    step:"If data point is an outlier data entry should not be made in OCEMS, instead repeat the process from step 1 to step 7 again on the same day by picking up the sample again."
  },
  {
    item:"Step 10:",
    step:"If two consecutive performance check samples fall out of range and remains outliers recommend basic OCEMS calibration again through the supplier."
  },
]
  useEffect(() => {
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.addEventListener("click", event => {

            // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
            
            // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
            // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            //   currentlyActiveAccordionItemHeader.classList.toggle("active");
            //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            // }

            accordionItemHeader.classList.toggle("active");
            const accordionItemBody = accordionItemHeader.nextElementSibling;
            if (accordionItemHeader.classList.contains("active")) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
            }
            else {
                accordionItemBody.style.maxHeight = 0;
            }

        });
    });
}, []);
 
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
              <div className="col-12 mb-3"data-aos="fade-up">
                <h1 className="services-head1 mb-3">Our Services</h1>
              </div>

              <div className="col-12 col-lg-6  mb-3"data-aos="fade-up">
                <p className="wms-desc">
                  A complete solution for backend emission | effluent | noise  monitoring!
                </p>
                <h1 className="wms-head mb-3">
                  Online Continuous Pollution Monitoring Application
                </h1>
                <p className="mb-0 wms-desc">Connect EBHOOM Application with any Global device</p>
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
                  <a href="https://www.admin.ebhoom.com" target="__blank">
                    SignIn
                  </a>
                </p>
              </div>

              <div className="col-12 col-lg-6 text-center"data-aos="fade-down">
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

         {/* <div>
          <div className="container">
            <div className="row">
             
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mb-3"data-aos="fade-up">
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
              <div className="col-12 col-lg-6  text-center"data-aos="fade-down">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="https://youtu.be/shTSzR2weIQ?si=jxaErhAeRI6b4OOt"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* go green ends */}

        {/* divider */}
        <div className="p-5"></div>
        <div className="p-4"></div>
        {/* divider */}

        <div className="container">
          <div className="row">
            <div className="col-12 "data-aos="zoom-in">
              <h3 className="products-head mb-5">What we offer</h3>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
            <h4 className="services-head3  "data-aos="fade-down">
                Connect any emission monitoring systems of Air, Water & Noise to  <strong className="text-blue">EBHOOM</strong>  application
              </h4>
              <p className="services-desc"data-aos="fade-up">
                EBHOOM, is a real-time Pollution monitoring system that can help you comply with the CPCB regulations. The data from EBHOOM can be submitted to the KSPCB in real time, which will help you to meet the requirements of the Board.
              </p>
              <p className="services-desc"data-aos="fade-down">
                Easy to use and maintain. 
                Compliant with CPCB and SPCB regulations. 
                Helps to improve water quality management. 
                Reduces the risk of pollution.

              </p>
            </div>
            
            <div className="col-12 col-lg-4 mb-3 ">
             

            
              
              
            </div>
           
            
            
           
          </div>
        </div>
       
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}
        
        {/* Calibration of OCEMs design */}
        <section id="calibration_ocems">
        <div>
          <div id="right_1" className="container">
            <div className="row">
            <div className="col-12  d-flex flex-column justify-content-center align-items-center"data-aos="zoom-in">
                  <h3 className="products-head mb-3">For Calibrating your <strong className="text-blue">OCEMS</strong> contact us </h3>

                  <Link to="tel:8086704092"target="_blank">
                    <button className="learn-more-button-service " type="button">
                      Contact us
                    </button>
                  </Link>
                </div>
            <div className="col-12  d-flex flex-column justify-content-center align-items-center"data-aos="zoom-out">
                  <h3 className="products-head mb-5 mt-5">Calibration of <strong className="text-blue">OCEMS</strong> </h3>
                  
                </div>
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mb-3"data-aos="fade-up">
              <p>STP Operators may deploy different makes of instruments based on different technologies 
                measuring effluent quality in terms of <strong className="text-green">PH</strong>, <strong className="text-green">BOD</strong>, <strong className="text-green">COD</strong>, and <strong className="text-green">TSS</strong>, therefore, operation and calibration 
                mechanism of such instruments will differ. This document covers calibration procedure forcommonly used technologies for effluent monitoring, available as on date, that is UV-Vis principle 
                based system for  <strong className="text-green">BOD</strong>, <strong className="text-green">COD</strong>, & <strong className="text-green">TSS</strong> measurement having dual beam scanning and Multipoint 
                calibration mechanism.
              </p>
              <ul><span className="text-bold">Complete calibration of <strong className="text-blue">OCEMS</strong> requires following checks, calibrations & validations:</span>
                <li>Function Check</li>
                <li>Basic Installation & Calibration</li>
                <li>Continuous Validation</li>
                <li>Performance Check</li>
                </ul>
              </div>
              <div className="col-12 col-lg-6  text-center" data-aos="fade-down">
                <div class="ratio ratio-16x9">
                  <img
                    src="/assets/images/Ebhoom/23.png"
                    alt="Ocems Calibration"
                  ></img>
                </div>
              </div>
            </div>
            <div>
             
        </div>
          </div>
          <div id="left_1" className="container">
          <div className="row">
            
            <div className="col-12 col-lg-6 mb-3"data-aos="fade-up">
             <img src="/assets/images/Ebhoom/6.png" className="ratio ratio-16x9 mt-5"></img>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center"data-aos="fade-down">
              <p className="">
              <p>
                The calibration shall be considered complete, when process no. (i), (ii), (iii) and (iv) have been 
                completed successfully and all the conditions of protocol are found to be within permissible 
                ranges/limits mentioned in this document.
                </p>
                <p>
                Function checks, Installation & calibration check is the responsibility of the firm or its authorized 
                representative installing OCEMS. Ensuring continuous validation of OCEMS is the responsibility of 
                the operator of STPs (to be verified by SPCBs/PCCs). Performance check of OCEMS is the 
                responsibility of SPCBs/PCCs to verify the performance of plants against stipulated standards. 
                </p>
                <p>
                Function checks, Installation & calibration check is the responsibility of the firm or its authorized 
                representative installing OCEMS. Ensuring continuous validation of OCEMS is the responsibility of 
                the operator of STPs (to be verified by SPCBs/PCCs). Performance check of OCEMS is the 
                responsibility of SPCBs/PCCs to verify the performance of plants against stipulated standards. 
                </p>
              </p>
              
                
            </div>
          </div>
            </div> 
            <div id="right_2" className="container">
            <div className="row">
            
              <div className="col-12 col-lg-6 d-flex flex-column  mb-3" data-aos="fade-up">
              <h5> OCEMS Function check</h5>
                <p>
                The purpose of this exercise is to cross verify the operation of basic electronics involved in the 
                system. When required, this data should be shared through email to SPCBs/PCCs. Records of this 
                function check should be available in the plant.
                </p>

                <h6>Parameter-wise function check process is below:</h6>
                <p><strong style={{ marginRight: '25px' }}>pH:</strong>Calibrate pH meter with Certified (having international traceability) Buffer solutions of pH 
                        4, 7, 9.2 & 10. Perform at-least two point calibration within the expected range of the pH 
                        in the plant. For example, if pH is expected to be 7.8 then perform two points calibration 
                        with pH 7 and 9.2.
                </p>
                <p>
                <strong style={{ marginRight: '25px' }}>BOD: </strong>
                Not possible
                </p>
                <p>
                <strong style={{ marginRight: '25px' }}>COD:  </strong>
                Use KHP Certified Reference Material (CRM) <br/>
                </p>
                
                
                
              </div>
              
              <div className="col-12 col-lg-6  text-center" data-aos="fade-down">
                <div class="ratio ratio-16x9 mt-5">
                  <img
                    src="/assets/images/Ebhoom/8.png"
                    alt="Ocems Calibration"
                  ></img>
                </div>
              </div>
              <section id="faq" className="services" >
                 <div className="container">
                 <div className="row gy-4" style={{ color: '#ffaf12' }}data-aos="zoom-out">
                    <div className="accordion">
                       
                        
                        <div className="accordion-item">
                            <div className="accordion-item-header">
                            Steps
                            </div>
                            <div className="accordion-item-body">
                                <div className="accordion-item-body-content">
                                <>
                                {parameter.map((item)=>(
                <p className="steps">
                  
                <span style={{ marginRight: '25px'}}>{item.item} </span> {item.step}
                </p>
               ))}

                               </>
                                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 </div>
                </section>
                <p>
                <strong style={{ marginRight: '25px' }}>TSS:  </strong>
                Use Formazine solution. Care to be taken in handling solution.
                </p>
                <p>Frequency of function test is every 15 days. STPs may engage the firms providing services of O & M.</p>
            </div>
            <div>
             
        </div>
          </div>
          <div id="left_2" className="container">
          <div className="row">
            
            <div className="col-12 col-lg-6 mb-3 "data-aos="fade-up">
             <img src="/assets/images/Ebhoom/16.png" className="ratio ratio-16x9 mt-5"></img>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center"data-aos="fade-down">
              <p className="">
              <h5> Basic Installation and Calibration of OCEMS</h5>
                <p>The purpose of this exercise is to ensure installation of the system in a plant and collect calibration 
                    data points for better matrix matching and to authenticate the range of measurement coverage. 
                    The data collected should be shared through email to SPCBs/PCCs or CPCB. Copy of this basic or 
                    initial calibration should be available at any point of time in the plant. If such exercise was not done 
                    earlier, the same should be completed and records be maintained. Basic calibration test should be 
                    repeated when two consecutive validation tests or performance tests fail and results fall beyond 
                    the “criteria of outliers” given in this document.</p>
              </p>
              
                
            </div>
            <section id="faq" className="services">
                 <div className="container">
                 <div className="row gy-4" style={{ color: '#ffaf12' }}data-aos="zoom-out">
                    <div className="accordion">
                       
                        
                        <div className="accordion-item">
                            <div className="accordion-item-header">
                            Steps
                            </div>
                            <div className="accordion-item-body">
                                <div className="accordion-item-body-content">
                                <>
                <p className="steps">
                  <span style={{ marginRight: '25px'}}>Step 1: </span> Conduct Grab Sampling of effluent for 24 hours at an interval of 02 (Two) hours.
                </p>
                <p className="steps">
                  <span style={{ marginRight: '25px'}}>Step 2: </span> Conduct flow based composite sampling for every 24 hours. All measurements shall be reported in metric SI units. For Example, the flow shall be reported in m3/hr after conversion factor of 4.546 is applied to the readings in MGD.
                </p>
                <p className="steps">
                  <span style={{ marginRight: '25px'}}>Step 3: </span> Follow standard sampling procedure for
                  <ul>
                    <li>flow based composite preparation.</li>
                    <li>sample collection.</li>
                    <li>sample storage with ice.</li>
                    <li>sample preservation.</li>
                    <li>samples deposition.</li>
                  </ul>
                </p>
                </>
                {installationAndCalibration.map((item)=>(
                <p className="steps">
                <span style={{ marginRight: '25px'}}>{item.item} </span> {item.step}
                </p> 
               ))}
                                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 </div>
                </section>
          </div>
            </div> 
            <div id="right_3" className="container">
            <div className="row">
            
              <div className="col-12 col-lg-6 d-flex flex-column  mb-3"data-aos="fade-up">
              <h5>Continuous Validation of OCEMS</h5>
                <p>
                The purpose of this exercise is to check the validity of earlier calibration and collection of validated calibration data points for better matrix matching and to authenticate the range of measurement coverage. Frequency of continuous validation by plant operators should be once in 15 (Fifteen) days. The data collected should also be shared through email to CPCB, SPCB/PCCs.
                </p>
                <p className="steps_fun">
                  <span style={{ marginRight: '15px'}}>Function 1: </span> OCEMS Function check as above (as per technology used) to be performed once in fifteen days or fortnightly basis.
                </p>
                <p className="steps_fun">
                  <span style={{ marginRight: '15px'}}>Function 2: </span> OCEMS Validation through routine calibration library generation, to be performed once in fifteen days or fortnightly basis.
                </p>
                
               
                
                
                
              </div>
              
              <div className="col-12 col-lg-6  text-center"data-aos="fade-down">
                <div class="ratio ratio-16x9 mt-5">
                  <img
                    src="/assets/images/Ebhoom/3.jpg"
                    alt="Ocems Calibration"
                  ></img>
                </div>
              </div>
              <section id="faq" className="services">
                 <div className="container">
                 <div className="row gy-4" style={{ color: '#ffaf12' }}data-aos="zoom-out">
                    <div className="accordion">
                       
                        
                        <div className="accordion-item">
                            <div className="accordion-item-header">
                            Process of Routine Calibration Library Generation
                            </div>
                            <div className="accordion-item-body">
                                <div className="accordion-item-body-content">
                                <>
                <p className="steps">
                  <span style={{ marginRight: '25px'}}>Step 1: </span> Pick up one sample of effluent (treated water) from the OCEMS location.
                </p>
                <p className="steps">
                  <span style={{ marginRight: '25px'}}>Step 2: </span> Create data entry point in OCEMS and note down exact date and time along-with Global 
                                                                        calibration value at this point of time.
                </p>
                <p className="steps">
                  <span style={{ marginRight: '25px'}}>Step 3: </span> Follow standard sampling procedure for:
                  <ul>
                    <li>sample collection</li>
                    <li>sample preservation</li>
                    <li>sample storage with ice.</li>
                    <li>samples deposition.</li>
                  </ul>
                </p>
                </>
                {validation.map((item)=>(
                  <p className="steps">
                  <span style={{ marginRight: '25px'}}>{item.item} </span> {item.step}
                  </p>
                ))}                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 </div>
                </section>
                
            </div>
            <div>
             
        </div>
          </div>
        
        </div>
        </section>
        {/*End Calibration of OCEMs design */}
      </>
    
    );
  }
export default Services;
