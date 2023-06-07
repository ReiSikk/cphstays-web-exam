"use client"
import React, { useEffect, useState } from "react";
import ApartmentsList from "../../components/ApartmentsList";
import Filters from "../../components/Filters";


function Page() {
  // Fetch apartments from the API
  const [apartments, setApartments] = useState([]);
  const [availableApartments, setAvailableApartments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reisikk.dk/cph-stays-apt/wp-json/wp/v2/apartment?_embed');
        const jsonData = await response.json();
        setApartments(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  

//set filters state
  const [filter, setFilter] = useState({
    location: "all",
    rooms: "all",
    maxRent: "all",
    minSize: "all"
  });

  const locationChanged = (e) => {
    setFilter({ ...filter, location: e.target.value });
  };

  const roomsChanged = (e) => {
    setFilter({ ...filter, rooms: e.target.value });
  };

  const priceChanged = (e) => {
    setFilter({ ...filter, maxRent: e.target.value });
  };
  const sizeChanged = (e) => {
    setFilter({ ...filter, minSize: e.target.value });
  };
  const searchChanged = (e) => {
    setFilter({ ...filter, search: e.target.value.toLowerCase() });
  };



  // Filter available apartments
  useEffect(() => {
     // Filter available apartments based on the filter criteria
     const filteredApartments = apartments.filter((apartment) => {
      const isLocationMatch = filter.location === "all" || apartment.district === filter.location;
      const isRoomsMatch = filter.rooms === "all" || apartment.rooms === filter.rooms;
      const isMaxRentMatch = filter.maxRent === "all" || !filter.maxRent || parseInt(apartment.price) <= parseInt(filter.maxRent);
      const isMinSizeMatch = filter.minSize === "all" || !filter.minSize || parseInt(apartment.size) >= parseInt(filter.minSize);
      const isSearchMatch = !filter.search || apartment.title.rendered.toLowerCase().includes(filter.search) || apartment.address.toLowerCase().includes(filter.search) || apartment.district.toLowerCase().includes(filter.search);
  
      return isLocationMatch && isRoomsMatch && isMaxRentMatch && isMinSizeMatch && isSearchMatch;
    });
  
    setAvailableApartments(filteredApartments);
  }, [apartments, filter]);

  

  return (
    <>
      {/* Your JSX content here */}
      <div className="apartments-list-wrapper">
        <span className="small-label">Fully serviced apartments</span>
        <h2>Browse our apartments</h2>
        </div>
     {/*  <span className='small-label'>Find your ideal apartment</span> */}
      <Filters
        locationChanged={locationChanged}
        roomsChanged={roomsChanged}
        priceChanged={priceChanged}
        sizeChanged={sizeChanged}
        searchChanged={searchChanged}
      />
      <ApartmentsList  filter={filter} availableApartments={availableApartments} apartments={apartments} />
    </>
  );
}

export default Page;


 