"use client"

import React, { useRef, useState, useEffect } from "react";
import { useSearchParams, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../../components/ContactForm';
import { useContext } from 'react';
import { ImageContext } from '../../components/ImageContext';
import { useRouter } from 'next/navigation';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";


// import required modules
import { FreeMode, Navigation } from "swiper";


function Apartmentpage({searchParams}) {
  const { images } = searchParams;
  console.log(images, "images in apartment page");
  const imageUrls = JSON.parse(images);


  return (
    <>
    <div className="single-apt-images">
    <Swiper 
    loop={true} 
    spaceBetween={10} 
    navigation={true}  
     className="carousel"
     style={{
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff",
    }}
    modules={[FreeMode, Navigation]}
     >
   {imageUrls.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <Image src={imageUrl} alt={`Image ${index}`} width={1200} height={800} />
        </SwiperSlide>
      ))}
     {/*    <SwiperSlide key={"1"}>
      <Image src={searchParams.img} alt={searchParams.title} width={1200} height={800} />
      </SwiperSlide> */}

      </Swiper>
 {/*      <Swiper  onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">

          <SwiperSlide key={"4"}>
          <Image src={searchParams.img} alt={searchParams.title} width={1200} height={800} />
          </SwiperSlide>
      </Swiper> */}
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
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Sharing friendly</li>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Furnished</li> 
        </ul>
      </div>
      <div className="rules">
        <h4>House rules</h4>
        <ul>
          <li className='list-li-flex'><span><Image src="/images/check-icon.svg" width={28} height={28} alt="icon" /></span>Pets allowed</li>
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

