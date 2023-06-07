import React from 'react'
import Image from 'next/image'

function Testimonials() {
  return (
<section className='testimonials-wrapper'>
<span className='small-label'>Fully serviced apartments</span>
    <h3>Services we offer</h3>
    <div className="testimonials-section">
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/location-icon.svg' alt='testimonial icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h5>Prime locations</h5>
      <p>Premier properties in coveted Copenhagen neighborhoods</p>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/service.svg' alt='testimonial icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h5>Personalized Service</h5>
      <p>Dedicated support for hassle-free long-term stays</p>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/hotel-icon.svg' alt='testimonial icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h5>Extended Stays</h5>
      <p>Flexible options for long-term accommodation needs</p>
    </div>
    <div class="testimonial-card">
      <div class="testimonial-icon">
        <Image src='/images/housing-icon.svg' alt='testimonial icon' width={28} height={28} className="testimonial-icon" />
      </div>
      <h5>Corporate Housing</h5>
      <p>Tailored apartments for extended business stays.</p>
    </div>
    </div>
</section>

  )
}

export default Testimonials