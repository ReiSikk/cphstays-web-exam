import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation"


function ApartmentCard({apartmentLocation, apartmentRooms, apartmentPrice, apartmentSize, apartmentBeds, apartmentDistrict, apartmentPhotos, apartmentTitle, imgData, apartmentDescription}) {


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
          }
        }}
    
    /* onClick={handleClick} */>
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
