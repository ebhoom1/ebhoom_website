import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";
import contact from './../Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home=()=>{
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 p-5"></div>
          <div className="col-12 col-lg-6 mb-3">
            <div
              id="carouselExampleSlidesOnly"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner"data-aos="fade-out">
                <div class="carousel-item active" data-bs-interval="1000">
                  <h1 className="banner-head">
                    <span className="text-green">India's</span> own Pollution,{" "}
                    <br />
                    Monitoring System.
                  </h1>
                  <h3></h3>
                </div>
                {/* <div class="carousel-item">
                  <h1 className="banner-head">
                    We offer <br />
                    <span className="text-green">Environmental</span>{" "}
                    solutions
                  </h1>
                  <h3></h3>
                </div>
                <div class="carousel-item">
                  <h1 className="banner-head">
                    <span className="text-green">Purity</span> is Rarity,{" "}
                    <br />
                    We provide it
                  </h1>
                  <h3></h3>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 text-center"data-aos="fade-in">
            <img
              className="nature"
              src="assets/images/nature.gif"
              alt="ebhoom"
            />
          </div>
        </div>
      </div>

      {/* banner ends  */}

      {/* divider */}
      <div className="p-3"></div>

      {/* divider */}

      {/* Description Start */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="products-head mb-5"data-aos="fade-out">
                INDIA'S OWN {" "}
                <span className="text-green">POLLUTION MONITORING</span> SYSTEM
              </h3>
            </div>
            <div className="col-12 col-lg-6 mb-3 ">
             <img src="/assets/images/mobile app.png" className="description"></img>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <p className="about-home"data-aos="zoom-in">
               We monitor ambient <strong className="text-green">Air quality</strong>,<strong className="text-green">Water quality</strong> {" "}and  {" "}
               <strong className="text-green">Noise pollution</strong>. <br></br>
               Interactive monitoring application sutis with all pollution continues montioring device.
              </p>
              <Link to="/contact"target="_blank">
                {" "}
                <button className="learn-more-button-home" type="button">
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/*End Description Start */}

      {/* Product 1 */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="products-head mb-5"data-aos="fade-out">
               EBHOOM comply your emission regulation with best cutting edge technology device.  {" "}
              </h3>
            </div>
            <div className="col-12">
              <h3 className="products-head mb-5"data-aos="zoom-out">
              <strong style={{color:"#236a80"}}>"Online Continuous Emission Montioring System"</strong>
              </h3>
            </div>
            <div className="row justify-content-center">
            <div className="col-12 col-lg-6 mb-3">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="assets/images/device_1.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5> </h5>
                      <p>.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="assets/images/device_2.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5> </h5>
                      <p>.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="assets/images/device_3.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5> </h5>
                      <p>.</p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              
                <Link to="/contact"target="_blank">
                  {" "}
                  <button className="learn-more-button-home"  type="button">
                  Get your <span className="text-green">OCEMS</span> now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Product 1 */}

      {/* products  */}

      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="products-head mb-5"data-aos="fade-in">
                Advanced technology for{" "}
                <span className="text-green">Environmental</span> solutions
              </h3>
            </div>

            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <h2 className="products-head2 mb-3"data-aos="zoom-in">
                {" "}
                Online Continuous Effluent <br /> Monitorng System
              </h2>
              <Link to="/products#wms">
                {" "}
                <button className="learn-more-button-home mb-3" type="button">
                  Learn more
                </button>
              </Link>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img className="wms-img w-75 " src="assets/images/Ocems-box.png" />
            </div>
          </div>
        </div>
      </div>
      {/* products ends */}

      {/* divider */}
      <div className="p-5"></div>
      <div className="p-4"></div>
      {/* divider */}

      {/* about  */}

      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 mb-3">
              <div
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://images.unsplash.com/photo-1622322977885-8ee6d45ea016?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      class="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5> </h5>
                      <p>.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1622322977767-2c71d1787205?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      class="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5> </h5>
                      <p>.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://images.unsplash.com/photo-1526529613260-5f7cad1eb4b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      class="d-block w-100"
                      alt="..."
                    />
                    <div class="carousel-caption d-none d-md-block">
                      <h5> </h5>
                      <p>.</p>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <p className="about-home"data-aos="zoom-out">
                EBHOOM has the vision and the technology to transform our
                planet into a beautiful and clean one. EBHOOM is a Turnkey for all pollution related solutions establishment, the company has an unbeatable professional expertise in water, stack & air quality measurement technologies and Software’ s for CPCB-SPCB Servers.
              </p>
              <Link to="/about">
                {" "}
                <button className="learn-more-button" type="button">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* about ends */}

      {/* divider */}
      <div className="p-5"></div>
      <div className="p-4"></div>
      {/* divider */}

      {/* startup  */}

      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor gold"
                class="bi bi-award-fill"
                viewBox="0 0 16 16"
              >
                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
              <h2 className="products-head mb-3">
                Environmental Software Solutions, <span className="text-orange">Embedded Systems,</span>{" "}
                Analyzer Maintenance, <span className="text-green">Data uploading services to CPCB/SPCB server.</span>{" "}
                
              </h2>
            </div>

            <div className="col-12 col-lg-6  text-center">
              <img className="wms-img w-75" src="assets/images/startup.jpg" />
            </div>
          </div>
        </div>
      </div>
      {/* startup ends */}

      {/* divider */}
      <div className="p-5"></div>
      <div className="p-4"></div>
      {/* divider */}

      {/* go green  */}

      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6  text-center">
              <div class="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/UL0VAZGU6iI?rel=0"
                  title="YouTube video"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
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
          </div>
        </div>
      </div>
      {/* go green ends */}

      {/* divider */}
      <div className="p-5"></div>
      <div className="p-4"></div>
      {/* divider */}

      {/* clients  */}

      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="products-head mb-3">Our Clients</h3>
            </div>

            <div className="col-6 mb-3 col-lg-4 d-flex justify-content-center align-items-center text-center">
              <img
                className="client-logo w-50"
                src="assets/images/client/1.png"
                alt="ebhoom"
              />
            </div>
            <div className="col-6 mb-3 col-lg-4 d-flex justify-content-center align-items-center text-center">
              <img
                className="client-logo w-50"
                src="assets/images/client/2.png"
                alt="ebhoom"
              />
            </div>
            <div className="col-6 mb-3 col-lg-4 d-flex justify-content-center align-items-center text-center">
              <img
                className="client-logo w-50"
                src="assets/images/client/3.png"
                alt="ebhoom"
              />
            </div>
            <div className="col-6 mb-3 col-lg-4 d-flex justify-content-center align-items-center text-center">
              <img
                className="client-logo w-50"
                src="assets/images/client/4.png"
                alt="ebhoom"
              />
            </div>
            <div className="col-6 mb-3 col-lg-4 d-flex justify-content-center align-items-center text-center">
              <img
                className="client-logo w-50"
                src="assets/images/client/5.png"
                alt="ebhoom"
              />
            </div>
            <div className="col-6 mb-3 col-lg-4 d-flex justify-content-center align-items-center text-center">
              <img
                className="client-logo w-50"
                src="assets/images/client/6.png"
                alt="ebhoom"
              />
            </div>
            <div className="col-6 mb-3 col-lg-4 d-flex justify-content-center align-items-center text-center">
              <img
                className="client-logo w-50"
                src="assets/images/client/7.png"
                alt="ebhoom"
              />
            </div>
          </div>
        </div>
      </div>
      {/* cients ends */}
      {/* divider */}
      <div className="p-5"></div>
      <div className="p-4"></div>
      {/* divider */}
    </>
  );
}
export default Home;
