import React, { useState } from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import { CiCircleChevLeft } from "react-icons/ci";


export const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === React.Children.count(children) - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="carousel">
        <div className="item">{React.Children.toArray(children)[currentIndex]}</div>
        <div className="floating-Button">
          <CiCircleChevLeft onClick={goToPrevious} color='white' size={40}/>
          <CiCircleChevRight onClick={goToNext} color='white' size={40} />
        </div>
      </div>
    );
  };



