import React from "react";
import { Link } from "react-router-dom";

const HomepageIntroScene = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full md:w-3/4 h-[760px]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/film.mp4"
          alt="video"
          autoPlay
          loop
          muted
        />
        <Link to="/products">
          <button className="group absolute top-[460px] left-32 font-futurabook text-white px-2 py-0 border-white border-2 bg-transparent text-2xl md:text-xl lg:text-lg xl:text-2xl">
            <p class="text-lg m-6  relative w-max">
              <span>Go to Shop</span>
              <span class="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
            </p>
          </button>
        </Link>
      </div>
      <img
        src="/bgimage1.png"
        alt="Bg"
        className=" w-full md:w-[600px] h-auto object-cover"
      />

      <h1 className=" absolute top-[550px] left-[920px] font-futurabook text-white px-4 py-2  text-2xl md:text-xl lg:text-lg xl:text-2xl">
        La serviette Rayures
      </h1>
    </div>
  );
};

export default HomepageIntroScene;
