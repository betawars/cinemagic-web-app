"use client"
import React, { Suspense, useEffect, useState } from "react";
import "./Carousel.css";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "@/components/Arrows";
import { BsStarFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/loadingSpinner";

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

  useEffect(() => {
    let interval;
    if (!hovered) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [hovered, nextSlide]);
  
  const router = useRouter()
  const onDetailsClick = (id) => {
    console.log(id)
    router.push(`/details/${id}`)
  }

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
                {item.genre_ids.map((genre) => {
                  return (
                    <div key={genre} className="genre-chip">
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
              <div className="movie-buttons-container">
                <button onClick={()=>onDetailsClick(item)}>Details</button>
              </div>
            </div>
            <div className="image-container">
              <Suspense fallback={<LoadingSpinner />}>
                <Image
                  src={`https://image.tmdb.org/t/p/w780${item.poster_path}`}
                  height={2000}
                  width={2000}
                  alt={item.original_title}
                  priority
                />
              </Suspense>
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
