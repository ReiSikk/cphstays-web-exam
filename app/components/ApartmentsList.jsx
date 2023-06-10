"use client";
import React from 'react'
import ApartmentCard from './ApartmentCard'
import ErrorDiv from './ErrorDiv'
import { useState, useEffect, useContext } from 'react';







function ApartmentList (props) {     
  const [imgData, setImgData] = useState([]);
  const [images, setImages] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('https://reisikk.dk/cph-stays-apt/wp-json/wp/v2/apartment?_embed');
        const imagesResponse = await fetch('https://reisikk.dk/cph-stays-apt/wp-json/wp/v2/apartmentimage?_embed');
        const jsonData = await response.json();
        const jsonImages = await imagesResponse.json();
        setImgData(jsonData);
        setImages(jsonImages);


    };

    fetchData();
  }, []);


    if (!props.availableApartments) {
        return <div>Loading...</div>;
      }

      return (
        <>
        <div>
          {/* Render your fetched data here */}
          {props.availableApartments.length === 0 ? 
        <>
        <h4>No available Apartments</h4>
        <ErrorDiv />
        </>
         : ""} 
         <p className='small-label'>{props.availableApartments.length} homes found</p>
          <section className='apartments-flex'>
          {props.availableApartments && (
            <ul className="apartments-list-grid">
              {props.availableApartments.map((apartment) => (

                <li key={apartment.id}>
                <ApartmentCard 
                key={apartment.id} 
                apartmentLocation={apartment.address} 
                apartmentRooms={apartment.rooms} 
                apartmentPrice={apartment.price} 
                apartmentSize={apartment.size} 
                apartmentBeds={apartment.beds} 
                apartmentDistrict={apartment.district} 
                apartmentPhotos={apartment.apartment_photos} 
                apartmentTitle={apartment.title.rendered} 
                apartmentDescription={apartment.apartment_description}
                imgData={apartment._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}
                /* images={images[0]._links["wp:attachment"]} */
               />
                </li>
              ))}
            </ul>
          )}
          </section>
        </div>
        </>
      );
  };

export default ApartmentList
