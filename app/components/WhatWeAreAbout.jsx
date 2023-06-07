import React from 'react'
import Image from 'next/image'

function WhatWeAreAbout() {
  return (
    <section className='testimonials-wrapper'>
    <span className='small-label'>What drives us</span>
        <h3>What we are about</h3>
        <div className="testimonials-section">
        <div class="testimonial-card">
            <div className="icon-flex">
          <div class="small-icon">
            <Image src='/images/mission.svg' alt='testimonial icon' width={28} height={28} className="small-icon" />
          </div>
          <h4>Our mission</h4>
            </div>
          <p>Providing exceptional corporate housing and long-term stays for a comfortable and convenient home-away-from-home experience</p>
        </div>
        <div class="testimonial-card">
            <div className="icon-flex">
          <div class="small-icon">
            <Image src='/images/vision.svg' alt='testimonial icon' width={28} height={28} className="small-icon" />
          </div>
          <h4>Our vision</h4>
          </div>
          <p>Be the the leading provider of corporate housing and long-term stays in Copenhagen, setting the standard for exceptional comfort, convenience, and personalized service</p>
        </div>
        <div class="testimonial-card">
            <div className="icon-flex">
          <div class="small-icon">
            <Image src='/images/values.svg' alt='testimonial icon' width={28} height={28} className="small-icon" />
          </div>
          <h4>Our values</h4>
          </div>
          <p>Excellence, Hospitality, Commitment</p>
        </div>
        </div>
    </section>
  )
}

export default WhatWeAreAbout