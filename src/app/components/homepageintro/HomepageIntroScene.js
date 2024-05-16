import { Carousel, Button } from "react-bootstrap";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const HomepageIntroScene = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="relative w-full md:w-3/4 h-[950px]">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/film.mp4"
          alt="video"
          autoPlay
          loop
          muted
        />
        <button className="absolute top-[700px] left-32 font-futurabook text-white px-4 py-2 border-white border-2 bg-transparent text-2xl md:text-xl lg:text-lg xl:text-2xl">
          Go to Shop
        </button>
      </div>
      <img
        src="/bgimage1.png"
        alt="Bg"
        className=" w-full md:w-[800px] h-auto object-cover"
      />

      <h1 className=" absolute top-[700px] left-32 font-futurabook text-white px-4 py-2  text-2xl md:text-xl lg:text-lg xl:text-2xl">
        La serviette Rayures
      </h1>
    </div>
  );
};

export default HomepageIntroScene;
