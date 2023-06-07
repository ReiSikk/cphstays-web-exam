"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMediaQuery } from 'usehooks-ts'
import BurgerMenu from './BurgerMenu';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'


function NavigationBar() {
  const router = useRouter();
  const { pathname, query } = router;

  const isActive = (path) => {
    const params = new URLSearchParams(query);
    return params.get('page') === path;
  };


  const matches = useMediaQuery("(max-width: 899px)");
  return (
    <>
    <nav>
        {/* If screen is smaller than 899px reveal burgermenu */}
        {matches ? <BurgerMenu/> :
        <>
          <div className="nav-left">
          <Link  className="no-scale" href="/">
           <Image src="/images/cphstays-logo.svg" alt="cphstays logo" width={100} height={100} className="logo-img" />
           </Link>
         </div>
        <div className="nav-right">
       <Link href='/' className={pathname === '/' ? 'active-link' : ''} >
          Home
        </Link>
       <Link href='/pages/apartments' className={pathname === '/pages/apartments' ? 'active-link' : ''}>
          Apartments
        </Link>
       <Link href="/pages/about" className={pathname === '/pages/about' ? 'active-link' : ''}>
          About
        </Link>
        <Link href="/pages/contact" className={pathname === '/pages/contact' ? 'active-link' : ''}>
          Contact
        </Link>
          <Link id="primary-btn" className={pathname === '/pages/corphousing' ? 'active-link' : ''}  href="/pages/corphousing">Corporate housing</Link>
        </div>
        </>
}
        </nav>
        </>
  )
}

export default NavigationBar