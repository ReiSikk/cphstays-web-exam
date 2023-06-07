"use client"

import React from 'react'
import { useSearchParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';



function Apartmentpage({searchParams}) {

  return (
    <>
    <div className="single-apt-images">
      <Image src={searchParams.img} alt={searchParams.title} width={1200} height={800} />
    </div>
    <section className='apt-info-wrapper'>
      <div className='apt-info-left'>
      <span className='small-label'>{searchParams.district}</span>
      <h3>{searchParams.rooms} room apartment of {searchParams.size} m2</h3>
    <p className='single-apt-address'>{searchParams.address}</p>
      <p className='apartment-desc'>{searchParams.description}</p>
      </div>
    <div className="apt-details-wrapper">
      <div className="apartment-details">
      <ul>
        <li>
          <span>
            <Image 
            src="/images/location.svg"
            alt="icon_1"
            width={20}
            height={20}
            className="card-icon"
            />
          </span>
            {searchParams.address}
         </li>
        <li>
          <span>
            <Image 
              src="/images/floor_plan.svg"
              alt="rooms icon"
              width={20}
              height={20}
              className="card-icon"
            />
            </span>
            {searchParams.rooms} rooms
          </li>
        <li>
          <span>
            <Image 
              src="/images/sqm.svg"
              alt="size icon"
              width={20}
              height={20}
              className="card-icon"
            />
            </span>
            {searchParams.size} m2
          </li>
        <li>
          <span>
            <Image 
              src="/images/money-icon.svg"
              alt="money icon"
              width={20}
              height={20}
              className="card-icon"
            />
            </span>
            {searchParams.price} DKK/month
          </li>
        <li>
          <span>
            <Image 
              src="/images/bed.svg"
              alt="beds icon"
              width={20}
              height={20}
              className="bedrooms-icon"
            />
            </span>
            {searchParams.beds} bedrooms
          </li>
      </ul>
      </div>
      <div className="apartment-cta">
      <Link href={`mailto:info@managemyair.dk?subject=Enquiry about the apartment ${searchParams.address}`} className="secondary-btn">Request apartment</Link>
        </div>
    </div>
    </section>
    <section className="amenities_rules">
      <div className="amenities">
        <h4>Top amenities</h4>
        <ul>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Wifi</li>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Dishwasher</li>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Balcony</li>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Parking</li>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Pet friendly</li>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Bike garage</li>
        </ul>
      </div>
      <div className="rules">
        <h4>House rules</h4>
        <ul>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Pets</li>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Sharing friendly</li>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Balcony/terrace</li>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Furnished</li> 
          <li className='list-li-flex'><span><Image src="/images/cross-icon.svg" width={28} height={28} alt="icon" /></span>No smoking</li>
          <li className='list-li-flex'><span><Image src="/images/cross-icon.svg" width={28} height={28} alt="icon" /></span>No parties</li>
          <li className='list-li-flex'><span><Image src="/images/cross-icon.svg" width={28} height={28} alt="icon" /></span>No loud music after 22</li>
        </ul>
        </div>
    </section>
    <ContactForm />
    </>
  )
}

export default Apartmentpage

