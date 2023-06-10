import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { ImageContext } from "./ImageContext";



function ApartmentCard({apartmentLocation, apartmentRooms, apartmentPrice, apartmentSize, apartmentBeds, apartmentDistrict, apartmentPhotos, apartmentTitle, imgData, apartmentDescription, images}) {

  const [aptImg, setAptImg] = useState([]);
    ////trying out stuff
    const { setImageUrls } = useContext(ImageContext);

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reisikk.dk/cph-stays-apt/wp-json/wp/v2/media?parent=70');
        const jsonData = await response.json();
  
        // Extract the array of images and their source URLs
        const images = jsonData.map(image => image.source_url);
        console.log(images, "images");
  
        // Update the state with the fetched image URLs
        setAptImg(images);
        setImageUrls(images);
        /* searchParams.set('images', imagesString); */
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };
  
    fetchData();
  }, [setImageUrls]);
  console.log(aptImg, "images in ApartmentCard");

  const handleNavigate = () => {
    setImageUrls(imgageUrls);
  };






  return (
    <>
    <Link  href={{
          pathname: '/pages/apartment',
          query: {
            address: apartmentLocation,
            rooms: apartmentRooms,
            price: apartmentPrice,
            size: apartmentSize,
            beds: apartmentBeds,
            district: apartmentDistrict,
            photos: apartmentPhotos,
            title: apartmentTitle,
            img: imgData,
            description: apartmentDescription,
            images: images,
          }
        }}
    
    onClick={handleNavigate}>
   <div className="card">
        <div className="card_image">
          {" "}
          <Image
             src={imgData}
             alt={apartmentTitle}
             width={250}
            height={150}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            400px" 
            className="the_card_image"
          />
        </div>

        <div className="card_content">
          <h4 className="apartment_descrpiton">{apartmentLocation}
        <span className="small-label">{apartmentDistrict}</span>
          </h4>
          <p className="price">{apartmentPrice} DKK/month</p>
          <div className="address">
            {" "}
            <Image
              src="/images/location.svg"
              alt="icon_1"
              width={20}
              height={20}
              className="card-icon"
            />
            <p className="card_p">{apartmentLocation ? apartmentLocation : "unavailable"}</p>
          </div>
          <div className="sqm2">
            {" "}
            <Image
              src="/images/sqm.svg"
              alt="icon_1"
              width={20}
              height={20}
              className="card-icon"
            />
          <p className="card_p">{apartmentSize ? `${apartmentSize} m2` : 'unavailable'}</p>
          </div>
          <div className="bedrooms">
            {" "}
            <Image
              src="/images/floor_plan.svg"
              alt="icon_1"
              width={20}
              height={20}
              className="card-icon"
            />
            <p className="card_p"> {apartmentRooms ? `  ${apartmentRooms} rooms` : "unavailable"}</p>
          </div>{" "}
          <div className="beds">
            {" "}
            <Image
              src="/images/bed.svg"
              alt="icon_1"
              width={20}
              height={20}
              className="card-icon"
            />
            <p className="card_p">{apartmentBeds} beds</p>
          </div>{" "}
        </div>
      </div>
    </Link>
    </>
  );
}


export default ApartmentCard;
