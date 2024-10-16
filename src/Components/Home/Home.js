import React, { useEffect, Suspense, lazy, memo } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

// Lazy-load the Contact component for better performance
const Contact = lazy(() => import("./../Contact/Contact"));

const Home = memo(() => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Optimized AOS settings
  }, []);

  const handleClick = () => {
    window.open("https://ocems.ebhoom.com", "_blank");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 p-5"></div>
          <div className="col-12 col-lg-6 mb-3">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner" data-aos="fade-out">
                <div className="carousel-item active" data-bs-interval="1000">
                  <h1 className="banner-head">
                    <span className="text-green">India's</span> <br />
                    Environmental <br />
                    technology.
                  </h1>
                  <button onClick={handleClick} className="btn-Ocems">
                    Ocems
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 text-center" data-aos="fade-in">
            <img
              className="nature"
              src="assets/images/nature.gif"
              alt="ebhoom"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="p-3"></div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="products-head mb-5" data-aos="fade-out">
                INDIA'S OWN <span className="text-green">POLLUTION MONITORING</span> SYSTEM
              </h3>
            </div>
            <div className="col-12 col-lg-6 mb-3">
              <img
                src="/assets/images/mobile app.png"
                className="description"
                alt="Mobile App"
                loading="lazy"
              />
            </div>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
              <p className="about-home" data-aos="zoom-in">
                We monitor ambient <strong className="text-green">Air quality</strong>,{" "}
                <strong className="text-green">Water quality</strong>, and{" "}
                <strong className="text-green">Noise pollution</strong>. <br />
                Interactive monitoring application suits all pollution monitoring devices.
              </p>
              <Link to="/contact" target="_blank">
                <button className="learn-more-button-home" type="button">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="products-head mb-5" data-aos="fade-out">
                EBHOOM complies with emission regulations using cutting-edge technology.
              </h3>
            </div>
            <div className="col-12">
              <h3 className="products-head mb-5" data-aos="zoom-out">
                <strong style={{ color: "#236a80" }}>
                  "Online Continuous Emission Monitoring System"
                </strong>
              </h3>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-6 mb-3">
                <div
                  id="carouselExampleCaptions"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {["device_1.jpg", "device_2.jpg", "device_3.jpg"].map((img, idx) => (
                      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={img}>
                        <img
                          src={`assets/images/${img}`}
                          className="d-block w-100"
                          alt={`Device ${idx + 1}`}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                <Link to="/contact" target="_blank">
                  <button className="learn-more-button-home" type="button">
                    Get your <span className="text-green">OCEMS</span> now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product */}
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
              <img className="wms-img w-75 " src="assets/images/Ebhoom/25.png" />
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
{/* youtube */}
<div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 text-center">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/UL0VAZGU6iI?rel=0"
                title="YouTube video"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="go-green mb-3">
              PURE <span className="text-green">LIFE</span>
            </h1>
          </div>
        </div>
      </div>
      {/* clients */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="products-head mb-3">Our Clients</h3>
          </div>

          {Array(7)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="col-6 mb-3 col-lg-4 d-flex justify-content-center align-items-center"
              >
                <img
                  className="client-logo w-50"
                  src={`assets/images/client/${idx + 1}.png`}
                  alt={`Client ${idx + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="p-5"></div>

      

      
    </>
  );
});

export default Home;
