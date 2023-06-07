
"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HDIWsection from '../../components/HDIWsection'
import Testimonials from '../../components/ServicesSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import ContactForm from '../../components/ContactForm'

function page() {
  return (
    <>
      <section className='corp-hero-wrapper'>
        <h1>Partner up with CPH Stays</h1>
        <div className="hero-container">
          <Image
            src="/images/hero-img.webp"
            alt="hero image"
            width={1200}
            height={800}
            className="hero-img"
          />
          <div className="hero-cta">
            <h3>Find your perfect apartment and send a request</h3>
            <div className="hero-cta-container">
              <Link href="/apartments" className="secondary-btn">
                See apartments
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="benefits">
      <div className="benefits-container">
          <div className="benefits-right">
            <p className='small-label'>Corporate housing</p>
            <h3>CPH Stays: Corporate Housing in Copenhagen</h3>
            <p>
            Discover furnished apartments in prime locations. Personalized service for a remarkable stay.
Relocate or provide long-term housing with ease. Experience convenience and comfort with CPH Stays.
Make your stay extraordinary. Explore our offerings today.
            </p>
          </div>
          <div id="benefits">
          <div className="benefits-content">
        <div className="corphousing-bg-img"></div>
          <div className="benefits-left">
            <ul className="corp-benefits-list">
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                Fully serviced apartments
              </li>
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                24/7 customer service
              </li>
              <li>
                <span>
                  <Image
                    src="/images/check-icon.svg"
                    alt="check icon"
                    width={28}
                    height={28}
                    className="benefits-icon"
                  />{" "}
                </span>
                All inclusive service
              </li>
            </ul>
          </div>
          </div>
          </div>
        </div>
      </section>
      <HDIWsection />
      <Testimonials /> 
      <TestimonialsSection />

      <ContactForm />
    </>
  );
}

export default page;
