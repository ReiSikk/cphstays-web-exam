"use client"
import React from 'react'
import Image from 'next/image'
import WhatWeAreAbout from '@/app/components/WhatWeAreAbout'
import WhyChooseUs from '@/app/components/WhyChooseUs'

function page() {
  return (
    <>
    <section className='about-hero-wrapper'>
        <div className="about-hero-container">
          <div className="about-hero-img"></div>
          <div className="hero-content">
          <ul className="about_list">
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
              Convenience: Hassle-free corporate accommodation
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
              Comfort: Fully serviced apartments
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
              Service: Hospitality experience
            </li>
          </ul>
          </div>
        </div>
      </section>
          <h1>Comfort and convenience with CPH Stays</h1>
      <section className="benefits">
        <div className="benefits-container">
          <div className="benefits-right">
            <p className='small-label'>Our story</p>
            <h3>How CPH Stays started</h3>
            <p>
CPH Stays was born out of Cheryl Barnes&apos; passion for providing exceptional housing solutions to individuals seeking long-term stays in Copenhagen. With a deep understanding of the unique challenges faced by corporate travelers and those relocating for work, Cheryl envisioned a service that would prioritize comfort, convenience, and personalized support. Combining her extensive experience in property management and a genuine commitment to customer satisfaction, Cheryl established CPH Stays to create a seamless and unforgettable experience for every guest, making them feel at home in the beautiful city of Copenhagen.
            </p>
          </div>
          <div id="benefits">
          <div className="benefits-content">
        <div className="benefits-bg-img"></div>
          <div className="benefits-left">
            <ul className="benefits-list">
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
      <WhatWeAreAbout />
      <WhyChooseUs />
    </>
  )
}

export default page