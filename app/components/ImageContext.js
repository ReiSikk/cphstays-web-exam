/* import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [imageUrls, setImageUrls] = useState([]);

  return (
    <ImageContext.Provider value={{ imageUrls, setImageUrls }}>
      {children}
    </ImageContext.Provider>
  );
}; */
"use client";

import React, { createContext, useState } from 'react';

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [imageUrls, setImageUrls] = useState([]);

  return (
    <ImageContext.Provider value={{ imageUrls, setImageUrls }}>
      {children}
    </ImageContext.Provider>
  );
};



