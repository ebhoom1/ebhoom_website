import React, { Component } from "react";
import "./index.css";

export default class About extends Component {
  render() {
    return (
      <>
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="wms-head2">Why EBHOOM ?</h3>
            </div>
            <div className="col-12 col-lg-7 mb-3">
              <p className="wms-desc mb-3">
                Ebhoom has the vision and the technology to transform our planet
                into a beautiful and clean one. Solid Waste Management and water
                pollution has always been a universal issue and Ebhoom is here
                to bring you Solutions. Our scope includes Water recycling
                solutions, solid waste management, Ecology restoration and Urban
                Gardening. One of our goals is to eradicate water scarcity. We
                have developed our own technology that can be used for
                desalination, which opens the path to abundant water for the
                entirety of earth. The three R principle of Reduce, Reuse and
                Recycle will be our guideline for Solid waste management. Our
                water disposal technologies will treat the waste/effluent water
                making it suitable for disposal and prevent the contamination of
                ground, ground water and other water resources. The
                reforestation is our eco-project, to give earth back the woods
                we took from her. <br />
                Our mission is to purify the earth, and our vision is that we
                live a fresh life in it.
              </p>
            </div>

            <div className="col-12 col-lg-5 mb-3 text-center">
              <img
                className="w-75"
                src="assets/images/earth.png"
                alt="ebhoom"
              />
            </div>
          </div>
        </div>

        {/* divider */}

        <div className="p-4"></div>
        {/* divider */}

        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="about-caption">
                "We're here because we believe in a world free of waste."
              </p>
            </div>
          </div>
        </div>
        {/* divider */}

        <div className="p-4"></div>
        {/* divider */}
        <div className="green-card">
          <div className="container ">
            <div className="row">
              <div className="col-12">
                <h3 className="wms-head2">Our Message</h3>
              </div>
              <div className="col-12 col-lg-10 mb-3 ">
                <p className="wms-desc">
                  Dear earth dwellers, <br />
                  Our planet has been in existence for over 13 billion years.
                  Now she is facing the consequences of human civilization in
                  different forms , one of which is different types of
                  pollution. As the advanced species on this planet , the
                  responsibility is on our shoulders to restore this polluted
                  planet into a better and fresh one. We have chosen to address
                  these issues step by step. Our final goal is a clean earth and
                  to get there Ebhoom Solution’s technologies will be the
                  bridge.. We will strive to become a global leading
                  environmental services company that gives the best value to
                  our customers and our biodiversity.
                </p>
                
                
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="p-5"></div>
        <div className="p-4"></div>
        {/* divider */}
      </>
    );
  }
}
