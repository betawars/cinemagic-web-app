"use client"
import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styled from "styled-components";

import "./Carousel.css";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@/components/Arrows";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [hovered, setHovered] = useState(false)
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ArrowLeft hover={hovered.toString()} onClick={prevSlide} />
      {data.map((item, idx) => {
        const isVisible = slide === idx;
        return (
          <div key={idx} className={`slide-wrapper ${isVisible ? "slide-visible" : ""}`}>
            <div className="movie-title-container">
              <h3>{item.original_title}</h3>
            </div>
            <div className="image-container">
              <Image
                src={`https://image.tmdb.org/t/p/w780${item.poster_path}`}
                height={2000}
                width={2000}
                alt={item.original_title}
                priority
              />
            </div>
          </div>
        );
      })}
      <ArrowRight hover={hovered.toString()} onClick={nextSlide} />
      {/* <span className="indicators">
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
      </span> */}
    </div>
  );
};
