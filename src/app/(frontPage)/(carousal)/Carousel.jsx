"use client"
import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styled from "styled-components";

import "./Carousel.css";
import Image from "next/image";

export const Carousel = ({ data }) => {
  console.log(data)
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  const arrow = `
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  &hover{
    cursor:pointer
  }
  `
  const arrow_left=`
    left: 1rem;
    z-index: 1;
  `
  const right=`
    right: 1rem;
  `

  const Arrow_left = styled(BsArrowLeftCircleFill)`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;
  left: 1rem;
  z-index: 1;
  opacity: ${({ hover }) => (hover === "true" ? "1" : "0")};
  transition: opacity 1s ease-in-out 0.1s;
  `;

  const Arrow_right = styled(BsArrowRightCircleFill)`
  position: absolute;
  filter: drop-shadow(0px 0px 5px #555);
  width: 2rem;
  height: 2rem;
  color: white;
  cursor: pointer;
  right: 1rem;
  z-index: 1;
  opacity: ${({ hover }) => (hover === "true" ? "1" : "0")};
  transition: opacity 1s ease-in-out 0.1s;
  `;

  const [hovered,setHovered] = useState(false)

  return (
    <div className="carousel"
      onMouseEnter={()=>setHovered(true)}
      onMouseLeave={()=>setHovered(false)}
    >
      <Arrow_left hover={hovered.toString()} onClick={prevSlide}/>
      {data.map((item, idx) => {
        console.log(item)
        return (
          <Image
            key={idx}
            src={item.urls}
            height={1000}
            width={1000}
            alt="car"
            className={`slide ${slide === idx ? "slide-visible" : ""}`}
          />
        );
      })}
      <Arrow_right hover={hovered.toString()} onClick={nextSlide}/>
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
