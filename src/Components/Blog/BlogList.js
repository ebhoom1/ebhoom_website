import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogList = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      {/* divider */}
      <div className="p-5"></div>
      <div className="p-1"></div>
      {/* divider */}

      <div className='container'>
        <div className='row'>
          <div className='col-12 mb-5' data-aos="fade-up">
            <h1 className='services-head1 text-center'>Our Blog</h1>
          </div>

          <div className='col-12 col-lg-4 mb-3' data-aos="fade-up">
            <Link className='link' to='/blog/understandingOCEMS'>
              <div className='blog-box'>
                <img className='img-fluid blog-img' src='/assets/images/understandingOCEMS.jpg' alt='ebhoom' />
                <p className='blog-list-head'>Understanding OCEMS: The Future of Industrial Pollution Control</p>
                <div className='mb-3'>
                  <span className='float-start d-flex justify-content-center align-items-center blog-list-desc'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-calendar me-1" viewBox="0 0 16 16">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg> 10/10/24
                  </span>
                  <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-clock me-1" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg> 10 minute read
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Repeat for each blog card */}
          <div className='col-12 col-lg-4 mb-3' data-aos="fade-up">
            <Link className='link' to='/blog/periyar-river'>
              <div className='blog-box'>
                <img className='img-fluid blog-img' src='/assets/images/periyar.jpg' alt='ebhoom' />
                <p className='blog-list-head'>Industrial Effluent and Wastewater Dumping: The Periyar River Pollution Crisis.</p>
                <div className='mb-3'>
                  <span className='float-start d-flex justify-content-center align-items-center blog-list-desc'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-calendar me-1" viewBox="0 0 16 16">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                    </svg> 10/10/24
                  </span>
                  <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-clock me-1" viewBox="0 0 16 16">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg> 3 minute read
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-12 col-lg-4  mb-3'  data-aos="fade-up">
<Link className='link' to='/blog/water-crisis-banglore'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='/assets/images/banglore.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'>Water Crisis in Bangalore: How Water Treatment Solutions Can Prevent Future Shortages
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 10/10/24</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 10 minute read</span>
</div>
</div>
</Link>


</div>

<div className='col-12 col-lg-4  mb-3'  data-aos="fade-up">
<Link className='link' to='/blog/kakkanad-lessons'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='/assets/images/kakkanad.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'>Water Treatment Technologies for Residential Complexes: Lessons from Kakkanad Flats
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 10/10/24</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 5 minute read</span>
</div>
</div>
</Link>



</div>

<div className='col-12 col-lg-4  mb-3'  data-aos="fade-up">
<Link className='link' to='/blog/waste-management'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='/assets/images/watermanagement.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'>Efficient Water Treatment Solutions for Industrial Wastewater Management
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 10/10/24</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 5 minute read</span>
</div>
</div>

</Link>

</div>

<div className='col-12 col-lg-4  mb-3'  data-aos="fade-up">
<Link className='link' to='/blog/ocems'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='/assets/images/ocems.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'> A Step-by-Step Guide to Implementing OCEMS in Your Industry
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 11/10/24</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 3 minute read</span>
</div>
</div>

</Link>

</div>

<div className='col-12 col-lg-4  mb-3'  data-aos="fade-up">
<Link className='link' to='/blog/ocems'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='/assets/images/ocemsbenefits.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'> 5 Benefits of Installing OCEMS in Manufacturing Plants
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 11/10/24</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 3 minute read</span>
</div>
</div>

</Link>

</div>

<div className='col-12 col-lg-4  mb-3'  data-aos="fade-up">
<Link className='link' to='/blog/carbon-tracking'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='/assets/images/carbonfootprint.png' alt='ebhoom' width={'280px'}/>
 
 <p className='blog-list-head'> Carbon Emission Tracking: The Key to Reducing Your Industry’s Carbon Footprint
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 11/10/24</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 5 minute read</span>
</div>
</div>

</Link>

</div>

<div className='col-12 col-lg-4  mb-3'  data-aos="fade-up">
<Link className='link' to='/blog/carbon-footprint'>
<div className='blog-box'>
<img className='img-fluid blog-img' src='/assets/images/carbonurban.jpg' alt='ebhoom'/>
 
 <p className='blog-list-head'> The Growing Carbon Footprint of Cities: How Urban Areas Can Reduce Emissions
</p>
<div className='mb-3'>
<span className='float-start d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 11/10/24</span> <span className='float-end d-flex justify-content-center align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
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
  );
}

export default BlogList;
