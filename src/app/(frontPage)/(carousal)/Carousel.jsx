"use client"
import React, { useEffect, useState } from "react";
import "./Carousel.css";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@/components/Arrows";
import { BsStarFill } from "react-icons/bs";

export const Carousel = ({ movieData, genreData }) => {
  console.log(movieData)
  const [slide, setSlide] = useState(0);
  const [hovered, setHovered] = useState(false)
  const nextSlide = () => {
    setSlide(slide === movieData.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? movieData.length - 1 : slide - 1);
  };

  useEffect(()=>{
    const interval = setInterval(nextSlide,5000)
    return () => clearInterval(interval);
  })
  

  return (
    <div className="carousel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <ArrowLeft hover={hovered.toString()} onClick={prevSlide} />
      {movieData.map((item, idx) => {
        const isVisible = slide === idx;
        
        return (
          <div key={idx} className={`slide-wrapper ${isVisible ? "slide-visible" : ""}`}>
            <div className="text-container">
              <div className="movie-title-container">
                <h3>{item.title}</h3>
              </div>
              <div className="movie-desc-container">
                <p>{item.overview}</p>
              </div>
              <div className="movie-genre-container">
                {item.genre_ids.map((genre, idx) => {
                  return (
                    <div key={idx} className="genre-chip">
                      {genreData[genre]}
                    </div>
                  )
                }
                )}
              </div>
              <div className="movie-rating-container">
                <BsStarFill/> &nbsp;
                <p>{(item.vote_average).toFixed(2)}/10</p>
              </div>
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
        {movieData.map((_, idx) => {
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
