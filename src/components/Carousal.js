"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Previous from "./Previous";
import Next from "./Next";

const arrow_base =
  "w-14 h-14 hidden lg:flex font-medium text-white items-center justify-center rounded-full bg-gray-800/70 absolute";
const left_arrow = "left-4 bottom-0 ";
const right_arrow = "left-[80px] bottom-0 ";

export default function Carousal({ autoPlay, children }) {
  const isMobile = false;
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1.72,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={`${arrow_base} ${left_arrow}}`}
    >
      <Previous />
    </button>
  );
  const CustomRightArrow = ({ onClick, ...rest }) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className={`text-white ${arrow_base} ${right_arrow}}`}
    >
      <Next />
    </button>
  );

  return (
    <Carousel
      responsive={responsive}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      renderButtonGroupOutside={true}
      infinite={true}
    >
      {children}
    </Carousel>
  );
}
