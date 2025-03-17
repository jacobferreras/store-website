import React, { useState, useEffect } from "react";
import Background1 from "../assets/Background1.png";
import Background2 from "../assets/Background2.png";
import Background3 from "../assets/Background3.png";

function Component() {
  const images = [Background1, Background2, Background3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false); // Track if a transition is in progress

  const nextSlide = () => {
    if (transitioning) return; // Prevent multiple transitions
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransitioning(false);
    }, 500); // Match your transition duration
  };

  const prevSlide = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel relative overflow-hidden">
      <div
        className={`flex transition-transform duration-500 ease-in-out ${
          transitioning ? "pointer-events-none" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full "
          />
        ))}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4  ">
        <button onClick={prevSlide} className="btn btn-circle">
          ❮
        </button>
        <button onClick={nextSlide} className="btn btn-circle">
          ❯
        </button>
      </div>
    </div>
  );
}

export default Component;
