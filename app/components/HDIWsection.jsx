import React from 'react'
import Image from 'next/image'

function HDIWsection() {
  return (
    <>
    <section className="hdiw-section">
  <div class="hdiw-left">
    <span className='small-label'>All in one solution</span>
    <h3>How does it work?</h3>
    <ul className="steps-list">
      <li>
      <div className="step">
        <div className="step-icons">
            <Image src='/images/number1-icon.svg' alt='step1 icon' width={48} height={48} className="number-icon" />
            <Image src='/images/down-arrow.svg' alt='down arrow icon' width={28} height={28} className="down-arrow-icon" />
        </div>
          <div className="step-content">
            <h4>Discover Your Perfect Accommodation</h4>
            <p>Browse through our diverse portfolio to find the ideal accommodation that suits your needs and preferences</p>
          </div>
      </div>
      </li>
      <li>
      <div className="step">
        <div className="step-icons">
            <Image src='/images/number2-icon.svg' alt='step2 icon' width={48} height={48} className="number-icon" />
            <Image src='/images/down-arrow.svg' alt='down arrow icon' width={28} height={28} className="down-arrow-icon" />
        </div>
          <div class="step-content">
            <h4>Contact</h4>
            <p>Get in touch with our knowledgeable team of housing specialists. Reach out via phone or email to start the conversation.</p>
          </div>
      </div>
      </li>
      <li>
      <div className="step">
        <div className="step-icons">
            <Image src='/images/number3-icon.svg' alt='step3 icon' width={48} height={48} className="number-icon" />
            <Image src='/images/down-arrow.svg' alt='down arrow icon' width={28} height={28} className="down-arrow-icon" />
        </div>
          <div class="step-content">
            <h4>Enjoy a Seamless Booking Experience</h4>
            <p>Once you have found your ideal apartment, our team will handle all the rest - from lease agreements to move-in logistics, ensuring a smooth and hassle-free booking experience for you.</p>
          </div>
      </div>
      </li>
     
    </ul>
  </div>
  <div className="hdiw-right">
    <Image src='/images/howitworks.webp' alt='how it works image' width={1200} height={800} className="hdiw-img" />
  </div>
</section>
    </>
  )
}

export default HDIWsection