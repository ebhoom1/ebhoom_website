import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default class BlogList extends Component {
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
                    <h1 className='services-head1 text-center'>Our Blog</h1>
                  
                </div>
                <div className='col-12 col-lg-4  mb-3'>

                   <Link className='link' to='/blog/top-tips-for-a-beautiful-food-waste-bin'>
                   <div className='blog-box'>
                   <img className='img-fluid blog-img' src='assets/images/blog/1.jpg' alt='ebhoom'/>
                    
                    <p className='blog-list-head'>[DIY] Top tips for a beautiful food waste bin
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 12/06/22</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 3 minute read</span>
</div>
                   </div>
                   </Link>



                </div>

                <div className='col-12 col-lg-4  mb-3'>

<Link className='link' to='/blog/why-kerala-floods-were-the-worst-in-a-century'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='assets/images/blog/2.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'>Why Kerala floods were the worst in a century ?
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 12/06/22</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 10 minute read</span>
</div>
</div></Link>



</div>

<div className='col-12 col-lg-4  mb-3'>
<Link className='link' to='/blog/rainwater-harvesting-system-in-tn-mans-home'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='assets/images/blog/3.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'>Rainwater Harvesting System in TN Man’s Home Helped His Entire Village During Cyclone
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 12/06/22</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 3 minute read</span>
</div>
</div>
</Link>


</div>

<div className='col-12 col-lg-4  mb-3'>
<Link className='link' to='/blog/man-shows-how-to-set-up-a-rainwater-harvesting-system'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='assets/images/blog/4.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'>Mumbai’s Rain Man Shows How to Set Up a Rs 2500 Rainwater Harvesting System
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 12/06/22</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 3 minute read</span>
</div>
</div>
</Link>



</div>

<div className='col-12 col-lg-4  mb-3'>
<Link className='link' to='/blog/water-crisis'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='assets/images/blog/5.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'>Water-crisis - A Children's and Education Crisis
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 12/07/22</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 2 minute read</span>
</div>
</div>

</Link>

</div>

<div className='col-12 col-lg-4  mb-3'>
<Link className='link' to='/blog/couple-recycles-10000-tonnes-of-waste'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='assets/images/blog/9.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'>Couple Recycles 10000 Tonnes of Waste Every Month, Helps 800 Farmers Earn More
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 28/07/22</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 3 minute read</span>
</div>
</div>

</Link>

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
