import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

function BurgerMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openBurgerIcon = () => { 
        setIsMenuOpen(!isMenuOpen); 
    };




  return (
    <>
    <div id='burgerMenu'>
          <div className="nav-left">
          <Link href="/">
           <Image src="/images/cphstays-logo.svg" alt="cphstays logo"  width={100} height={100} className="logo-img" />
           </Link>
         </div>
    <div id="menuToggle">
      <input type="checkbox" id="myCheckbox" onChange={openBurgerIcon} checked={isMenuOpen} />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/pages/corphousing" className='animated-item'>Corporate housing</Link></li>
        <li><Link href="/pages/apartments" className='animated-item'>Apartments</Link></li>
        <li><Link href="/pages/about" className='animated-item'>About</Link></li>
        <li><Link href="/pages/contact" className='animated-item'>Contact</Link></li>
      </ul>
    </div>

    <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`} ></div>
  </div>
  </>
  )
}

export default BurgerMenu