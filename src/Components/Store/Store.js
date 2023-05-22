import React, { Component } from 'react'
import './index.css'

export default class Store extends Component {
  render() {
    return (
      <>
       
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}


        <div className='container'>
            <div className='row'>
                <div className='col-12 mb-5'>
                    <h1 className='services-head1 text-center'>Store</h1>
                  
                </div>

                <div className='col-12 col-lg-3 mb-3'>
                  <div className='store-card shadow text-center'>
                  <span className="badge bg-warning mb-3">Available</span>
                    <img className='w-100 mb-3' src='assets/images/wms.png' alt="Ebhoom" />
                    
                    <h5 className='mb-2 text-blue ebhoom-txt'>EBHOOM WMS</h5>
                    <p className='mb-3 store-desc'> A complete solution for backend monitoring and control of your
                  treatment plant</p>
                    <button className='book-button' type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>

                  </div>
                </div>
                </div>
                </div>


               

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Pre-Book Now</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
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

            <div className='col-12'>
            <iframe frameborder="0" style={{height:"500px",width:"99%",border:0}} src='https://forms.zohopublic.in/infoebhoom/form/BookWMS/formperma/KxG_fxhpU0A2u3BWVCPOxjNe1HYmnT5bdD2ppJjj5Lc'></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div>

                   {/* divider */}
        <div className="p-5"></div>
        
        {/* divider */}
        
      </>
    )
  }
}
