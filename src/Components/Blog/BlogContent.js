import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default class BlogContent extends Component {
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
          <img className='img-fluid blog-img' src='/assets/images/blog/1.jpg' alt='ebhoom'/>
        <h1 className='mb-3 font'>Top tips for a beautiful food waste bin</h1>
        <p className='font'>How to keep your kitchen food caddy bin clean, tidy and sweet smelling – whether you compost your food waste or recycle it through your local council.</p>
        <div className='mb-3'>
<span className=' d-flex justify-content-start align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-calendar me-1" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg> 12/06/22</span> <span className=' d-flex justify-content-start align-items-center blog-list-desc'><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-clock me-1" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg> 3 minute read</span>
</div>
<div></div>

<h3  className='font'>1.Recycle your food regularly</h3>
<p className='mb-3 font'>Your kitchen food waste bin fills up pretty quickly, right? Empty it out as soon as food nears the lid and you'll never need to deal with mould or the other kinds of gunk that form when food breaks down.</p>

<h3  className='font'>2.Squeeze your tea bags</h3>
<p className='mb-3 font'>Leave tea bags and coffee grinds to cool off before putting them in the food waste caddy. If it gets hot and steamy, it'll create extra water and encourage those frisky fruit flies. If it's too late, find out how to get rid of fruit flies  from Good Housekeeping.</p>
<h3  className='font'>3. Line your food waste caddy</h3>
<p className='mb-3 font'>Use stale bread, food-soiled paper or old newspaper to absorb excess moisture and avoid mouldy stuff getting stuck in the corners. This is also a great way to save your kitchen from bad smells.</p>
<h3  className='font'>4. Try a biodegradable food waste bag</h3>
<p className='mb-3 font'>Food waste bags are great. They keep everything together in the caddy, avoiding the development of dreaded bin juice around the base. And they make it much cleaner and easier to get your food waste into your outside bin. Just tie the top together like a regular bin bag and chuck the whole lot into your food recycling bin. Because they're biodegradable, these bags can be picked up by your usual council collection and won't get you into trouble with the rubbish collectors.</p>
<h3  className='font'>5. Separate your steaks</h3>
<p className='mb-3 font'>Save your kitchen from bad smells. Put stinky scraps like meat, fish or bones into a biodegradable food waste bag, wrap them in newspaper or empty them straight into the main food waste bin outside so your council can take them away for recycling before flies and maggots find their way inside. Don't forget to check your outside recycling bins for maggots from time to time too if you have a lot of meat and fish scraps – and get rid of any maggots  you notice before they take over.</p>
<h3  className='font'>7. Or eat less meat</h3>
<p className='mb-3 font'>Meat takes longer to break down than lovely vegetables, and attracts more bugs like flies into your kitchen. If you forget to empty a veg-based food waste caddy, you'll find it full of mould when you return – forget to empty out your meat scraps and you could come back to a bin full of maggots. The easiest way to avoid this is to eat less meat in the first place. You'll have less meaty leftovers to recycle, and you'll have cut the impact of your food on the environment at the same time. It's a win-win.</p>
<h3 className='font'>8. Get creative with your food waste caddy</h3>
<p className='mb-3 font'>You don’t have to use the standard plastic council food waste bin if it doesn’t do much for your kitchen décor. Get creative – look into vintage crockery or other watertight containers with lids that could hold a week’s worth of vegetable peelings in style. You could also splash out on a custom-designed ceramic kitchen compost crock or shiny pail.</p>
<h3 className='font'>9. Keep a lid on it</h3>
<p className='mb-3 font'>Closing the lid of your food waste bin tightly will stop fruit flies and other winged friends from getting in to lay eggs, and odours from getting out.</p>
<h3 className='font'>10. Keep it cool</h3>
<p className='mb-3 font'>Store your food waste caddy out of direct sunlight, as the heat can speed up smells.</p>
<h3 className='font'>11. And keep it clean</h3>
<p className='mb-3 font'>Rinse out your food waste bucket once a week with hot water containing a slug of tea tree oil or lemon juice, then leave to dry. Lemon juice is a natural odour remover and will help to kill any germs that might be lurking around your recycling bin.</p>
<h3 className='font'>12. Get the whole family involved</h3>
<p className='mb-3 font'>There's nothing worse than digging non-food waste out of your caddy. If you live with others, make sure they know what can go in the food waste bin and what can't. Ask kids to draw pictures to remind them, or stick a note on the outside of your caddy. There are plenty more tips to get everyone to remember that waste food shouldn't go to landfill – and videos to show what happens to the food you do recycle – over at Recycle Now .</p>
<h3 className='font'>13. Try composting</h3>
<p className='mb-3 font'>If you have a garden, you don't need to rely on a council food waste collection. You can take your food waste straight out to the compost heap, or use a kitchen composting bin with a special charcoal filter to keep smells at bay. If you're planning to put meat in your compost, get a sealed bin to contain smells and discourage scavengers. Bad smells, or pests like rats, are a sign that you're putting too much meat in the pile. Turn the heap regularly and keep the meat waste to a minimum.</p>
<h3 className='font'>14. Eat more of your food</h3>
<p className='mb-3 font'>Write a weekly menu plan, and make a shopping list, so you only buy what you need. Raid recipe books to stop food going to waste – mushy bananas make a stonking banana loaf and Sunday roasts make great stews, pies and stock. Get some inspiration for making roasts go further. Recycling food is great, but eating it is better.</p>


        
        
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
