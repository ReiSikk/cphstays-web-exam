import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <footer>
      <div id="footerSection">
      <div className="footer-left">
    <Link href="/">
     <Image src="/images/cphstays-logo.svg" alt="cphstays logo" width={200} height={200} className="logo-img" />
     </Link>
     <p><i>Temporary homes for travellers and expats
</i></p>
      </div>
      <div className="footer-right">
        <div className="footer-links-group">
        <h4>Service</h4>
        <ul>
        <Link href="/pages/corphousing">
          Corporate housing
        </Link>
        <Link href="/pages/apartments">
          Apartments
        </Link>
        <Link href="/pages/about">
          About us
        </Link>
        </ul>
        </div>
        <div className="footer-links-group">
        <h4>Contact</h4>
        <ul>
        <Link href="/pages/faq">
          FAQ
        </Link>
        <Link href="/pages/contact">
          Contact
        </Link>
        <Link href="tel:45 28 74 01 30">
          +45 28 74 01 30
        </Link>
        </ul>
        </div>
        </div>
        </div>
        <div className="footer-links">
          <div className="footer-left">
        <p className="copyright">Copyright ManageMyAir 2023 ©</p>
          </div>
        <div className="footer-some">
        <Link href="https://www.facebook.com/Managemyair/" target='_blank'>
          <Image src="/images/icons8-facebook.svg" alt="facebook logo" width={28} height={28} className="some-logo" />
        </Link>
        <Link href="https://www.instagram.com/managemyair/?hl=en" target='_blank'>
          <Image src="/images/icons8-instagram.svg" alt="instagram logo" width={28} height={28} className="some-logo" />
        </Link>
        <Link href="https://www.linkedin.com/company/managemyair/about/" target='_blank'>
          <Image src="/images/icons8-linkedin.svg" alt="linkedin logo" width={28} height={28} className="some-logo" />
        </Link>
        </div>


        </div>
      </footer>
      </>
  )
}

export default Footer