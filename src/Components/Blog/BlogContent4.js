import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default class BlogContent4 extends Component {
  render() {
    return (
      <>
       {/* divider */}
       <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}
      <div className='container'>
      <div className='row'>
      <div className='col-12 col-lg-3'>
        
        </div>
        <div className='col-12 col-lg-6'>
         <Link className='link' to='/blog'> <button className='back-button'>Back</button></Link>
          <img className='img-fluid blog-img' src='/assets/images/blog/4.jpg' alt='ebhoom'/>
        <h1 className='mb-3 font'>Mumbai’s Rain Man Shows How to Set Up a Rs 2500 Rainwater Harvesting System</h1>
        <p className='font'>Subhajit Mukherjee, a resident of Mumbai, has innovated a cost-effective system for rainwater harvesting and groundwater recharge.</p>
        <div className='mb-3'>
<span className=' d-flex justify-content-start align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 12/06/22</span> <span className=' d-flex justify-content-start align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 3 minute read</span>
</div>
<div></div>


<p className='mb-3 font'>
Mumbai is synonymous with beautiful rains and troublesome waterlogging during the monsoons. But rather than using the city’s potential to harvest rainwater, millions of litres are flushed into the drains every year.<br /><br />


Finding a practical way to harvest the rain, Subhajit Mukherjee, a resident of Malad in the city, has come up with a wonderful innovation — a low-cost rain harvesting and groundwater recharge system.<br /><br />
Taking inspiration from the idea once shared by retired IPS officer and former governor of Puducherry — Kiran Bedi, Subhajit designed this model with the help of engineers from IIT Bombay.
<br /><br />
His cost-effective system is built using PVC pipes and a water barrel/drum. It involves an underground pit to conserve the water that falls into it from the terrace. The pit helps in conserving and reviving the groundwater and other nearby water bodies like ponds, lakes, and deep tube wells.
<br /><br />
Subhajit, who is also the founder of the city-based NGO Mission Green Mumbai, created a rainwater harvesting set-up that can hold water for up to 10 days. This can be used for non-drinking purposes.
<br /><br />
He has been working with thousands of school students to set up this rainwater harvesting and groundwater recharging system in schools and private societies.
<br /><br />
The system, which costs around Rs 2,500 to Rs 5,000, has been helping save thousands of litres of water in Mumbai schools, parks and housing societies.

</p>



<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/0-1pm6NdAQQ?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
        
        </div>
        <div className='col-12 collg-3'>
        
        </div>
        </div>
      </div>
        {/* divider */}
        <div className="p-5"></div>
        <div className="p-1"></div>
        {/* divider */}
      </>
    )
  }
}
