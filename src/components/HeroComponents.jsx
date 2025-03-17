import React from "react";

const HeroComponents = () => {
  return (
    <section className="mb-5">
      <div className="hero min-h-screen">
        <img
          src="./src/assets/web background.jpg"
          className="min-h-screen"
          alt=""
        />
        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-neutral-content text-start">
          <div className="max-w-md mr-156">
            <h1 className="mb-1 text-lg text-black font-bold">
              Spring / Summer Collection
            </h1>
            <p className="mb-5 text-5xl text-black font-extrabold">
              Get up to 30% off New Arrivals
            </p>
            <button className="btn bg-red-500">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponents;
