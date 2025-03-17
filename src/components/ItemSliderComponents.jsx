import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import mensImage from "../assets/Mens.png";
import womensImage from "../assets/woments.jpg";
import kidImage from "../assets/kid.jpg";
import nikeImage from "../assets/nike.jpg";
import accesoriesImage from "../assets/OIP.JPG";

function Card({ imageUrl, description }) {
  return (
    <div className="card bg-base-100 shadow-xl w-96 h-96 image-full mb-15">
      {" "}
      {/* Fixed width and height */}
      <figure className="h-full">
        {" "}
        {/* Adjust image container height */}
        <img
          src={imageUrl}
          alt={description}
          className="object-cover h-full w-full"
        />{" "}
        {/* Ensure image fills container */}
      </figure>
      <div className="card-body">
        <div className="card-actions justify-center pt-40">
          {" "}
          {/* Adjusted padding */}
          <button className="btn btn-outline text-xl font-light w-40 hover:text-red-600 hover:bg-zinc-300 hover:font-semibold">
            {description}
          </button>
        </div>
      </div>
    </div>
  );
}

function ItemSlider() {
  const cardData = [
    { imageUrl: mensImage, description: "Men's" },
    { imageUrl: womensImage, description: "Women's" },
    { imageUrl: kidImage, description: "Kids" },
    { imageUrl: nikeImage, description: "Shoes" },
    { imageUrl: accesoriesImage, description: "Accessories" },
  ];

  return (
    <div className="relative w-10/12 mx-auto">
      {" "}
      {/* Removed px-4 and overflow-hidden */}
      <div className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -ml-20 z-10">
        {/* Added z-10 for layering */}
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>
      <div className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 -mr-10 z-10">
        {/* Added z-10 for layering */}
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div className="overflow-hidden">
        {" "}
        {/* Only overflow-hidden on the Swiper container */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={5}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Card imageUrl={card.imageUrl} description={card.description} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ItemSlider;
