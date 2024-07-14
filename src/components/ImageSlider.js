import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img1 from '../images/2..jpg';
import img2 from '../images/3..jpg';
import img3 from '../images/4..jpg';
import './ImageSlider.css';

const sliderImages = [img1, img2, img3];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    if (index < 0) {
      index = sliderImages.length - 1;
    } else if (index >= sliderImages.length) {
      index = 0;
    }
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="image-slider">
      <div className="slider-indicators">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            className={`slider-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => showSlide(index)}
          ></button>
        ))}
      </div>
      <div className="slider-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {sliderImages.map((img, index) => (
          <div key={index} className={`slider-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={img} alt={`Slide ${index}`} className="slider-image" />
          </div>
        ))}
      </div>
      <button className="slider-control-prev" onClick={() => showSlide(currentIndex - 1)}>
        <FaArrowLeft />
      </button>
      <button className="slider-control-next" onClick={() => showSlide(currentIndex + 1)}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ImageSlider;
