import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default class BlogContent5 extends Component {
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
          <img className='img-fluid blog-img' src='/assets/images/blog/5.jpg' alt='ebhoom'/>
        <h1 className='mb-3 font'>Water-crisis - A Children's and Education Crisis</h1>
        <p className='font'>When kids have safe water at home, they have time to go to school.</p>
        <div className='mb-3'>
<span className=' d-flex justify-content-start align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 12/07/22</span> <span className=' d-flex justify-content-start align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 2 minute read</span>
</div>
<div></div>

<h3  className='font'>Access to safe water and sanitation gives kids time and health for school</h3>

<p className='mb-3 font'>
When children don’t have access to water at home, they are often responsible for collecting it for their families. Sharing the burden with their mothers, children around the world spend 200 million hours each day collecting water. This takes time away from school. Likewise, poor sanitation keeps kids, especially girls, from being able to go to school.

</p>

<h3  className='font'>The water crisis impacts girls around the world</h3>

<p className='mb-3 font'>
Girls who lack access to safe water and sanitation at home or at school face significant challenges. Compounded by the fact that their safety and health are at risk when they have no choice but to defecate in the open, menstruation poses another reason why girls in impoverished, water-insecure communities do not go to school. Access to water and sanitation changes this. If for instance in India, water and toilets were accessible to even 1% more girls in secondary school, the country's GDP would rise more than $5 billion. Further, on a global scale, for every year a girl stays in school, her income can increase by 15-25%.
</p>

<h3  className='font'>An investment in a child’s education is an investment in our future</h3>

<p className='mb-3 font'>
Millions of families around the world don’t have the upfront resources to invest in two of the most critical resources for getting their kids to school – safe water and a toilet at home. Access to safe water means kids can look beyond the water crisis and ahead to bright futures.
</p>



<div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/PqYL7aeilYI?rel=0" title="YouTube video" allowfullscreen></iframe>
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
