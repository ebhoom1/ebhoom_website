import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class BlogContent2 extends Component {
  render() {
    return (
      <>
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}
        <div className='container' data-aos="fade-up">
          <div className='row'>
            <div className='col-12 col-lg-3'></div>
            <div className='col-12 col-lg-6'>
              <Link className='link' to='/blog'>
                <button className='back-button'>Back</button>
              </Link>
              <img className='img-fluid blog-img' src='/assets/images/periyar.jpg' alt='ebhoom' />
              <h1 className='mb-3 font'>Industrial Effluent and Wastewater Dumping: The Periyar River Pollution Crisis.</h1>
              <p className='font'>
                The Periyar River in Kerala, once a crucial water source, is now under severe threat due to unchecked industrial pollution. Factories in the region have been discharging untreated wastewater and harmful effluents directly into the river, leading to high levels of contamination. This has affected both the environment and public health, with toxic chemicals and heavy metals like lead and mercury found in the water, causing illnesses among local residents and damaging aquatic life.
              </p>
              <div className='mb-3'>
                <span className='d-flex justify-content-start align-items-center blog-list-desc'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-calendar me-1" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg> 10/10/24
                </span>
                <span className='d-flex justify-content-start align-items-center blog-list-desc'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-clock me-1" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                  </svg> 3 minute read
                </span>
              </div>

              <h3 className='font'>Why is This Happening?</h3>
              <p className='mb-3 font'>
                Industries often bypass regulatory guidelines, dumping pollutants without proper treatment. Without Effluent Treatment Plants (ETPs), harmful chemicals enter the river, reducing oxygen levels and killing aquatic life. Water contamination also affects agriculture and spreads diseases in nearby communities.<br /><br />
                On August 19, for the first time in the preceding 11 days, satellite images of Kerala captured fractures in the cloud cover. The state government lifted the red alert consequently. The fragmented clouds over the state unearthed the real devastation. Everybody had one question: was it normal?
                <br /><br />
              </p>

              <h3 className='font'>How Technology Can Help: The Role of Pollution Monitoring Systems</h3>
              <p className='mb-3 font'>
                Advanced technology can play a pivotal role in addressing river water pollution. Solutions like Online Continuous Emission Monitoring Systems (OCEMS) can track emissions and effluent discharge in real-time, providing immediate data on pollution levels. These systems help industries:<br /><br />
                <ul>
                  <li>Monitor Effluent Discharge: Track pollution levels continuously and in real-time.</li>
                  <li>Maintain Compliance: Ensure they meet environmental regulations.</li>
                  <li>Take Preventive Action: Identify and fix potential issues before they escalate into major pollution events.</li>
                </ul>
              </p>

              <h3 className='font'>Conclusion</h3>
              <p className='mb-3 font'>
                The Periyar River pollution crisis is a wake-up call. By enforcing stricter compliance, using ETPs, and leveraging real-time monitoring technologies like OCEMS, industries can help reduce pollution and safeguard our rivers for future generations.
              </p>

              <h3 className='font'>Related News</h3>
              <p className='mb-3 font'>
                To read more about the government initiatives to address the Periyar River pollution, visit the article <a href="https://timesofindia.indiatimes.com/city/kochi/government-initiatives-to-address-periyar-river-pollution/articleshow/110448494.cms" target="_blank" rel="noopener noreferrer">here</a>.
              </p>
            </div>
            <div className='col-12 collg-3'></div>
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
