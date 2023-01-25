import React, { Component } from "react";
import "./index.css";

export default class Careers extends Component {
  render() {
    return (
      <>
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}

        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="services-head1 text-center">Careers</h1>
            </div>

            <div className="col-12 col-lg-6 mb-4">
              <div className="career-card shadow">
                <h4><span class="badge bg-success ">NOW HIRING</span></h4>
                <h1>Environmental Engineer Intern</h1>
                <p className="mb-4">No. of position: <span class="badge bg-light text-dark">1</span></p>

                <h5>Description</h5>
                <p>
                  To work in Water and wastewater treatment systems, Sustainable
                  and green technologies, Pollution control, Renewable energy,
                  EIA and documentation, etc. Water and
                  Wastewater treatment system design, calculations &amp; PI
                  diagram knowledge. Treatment plant and other site inspection
                  and reporting. Documentation of Detailed project report.
                </p>

                <p className="mb-3">
                  Selection process through IGNITE Internship Programme{" "}
                  <a
                    target="_blank"
                    href="https://ignite.keralait.org/login-candidate"
                  >
                    Click here
                  </a>
                </p>
                <p className="mb-3">Internship Location: <span class="badge bg-light text-dark">Ernakulam</span></p>
                <p className="mb-3">Internship Nature: <span class="badge bg-light text-dark">Hybrid</span></p>
                <p className="mb-3">Last date to apply: <span class="badge bg-light text-dark">31/08/2022</span></p>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-center">
              <img
                className="nature"
                src="assets/images/earth.gif"
                alt="ebhoom"
              />
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="p-5"></div>

        {/* divider */}
      </>
    );
  }
}
