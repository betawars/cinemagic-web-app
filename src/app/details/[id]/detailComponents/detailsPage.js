import Image from "next/image"
import "./styles.css"
import { Suspense } from "react"
import LoadingSpinner from "@/components/loadingSpinner"
import MoviePoster from "./moviePoster"

export default function DetailsPage({ movieData }) {

    console.log(movieData)
    return (
        <div className="details-main">
            <img
                src={`https://image.tmdb.org/t/p/w780${movieData.backdrop_path}`}
                alt={movieData.title}
                height={"100vh"}
                width={"100%"}
                className="details-background-image"
            />
            <div className="details-main-inner-container">
                <div className="details-main-picture">
                    <div className="mt-20">
                        <MoviePoster
                            src={`https://image.tmdb.org/t/p/w780${movieData.poster_path}`}
                            alt={movieData.title}
                        />
                    </div>
                </div>
                <div className="details-main-info">
                    <div className="mt-20">
                        <h2 className="text-5xl">{movieData.title}</h2>
                        <div className="mt-5">
                            <button className="bg-[#c7b9d9] hover:bg-[#69a5ef] text-white font-sans text-[15px] px-5 py-2 rounded-[28px] border border-[#b9a7d7] shadow-sm hover:shadow-md active:relative active:top-px">Watch Now</button>
                            <button className="ml-3 bg-[#ffffff] hover:bg-[#69a5ef] text-black font-sans text-[15px] px-5 py-2 rounded-[28px] border border-[#b9a7d7] shadow-sm hover:shadow-md active:relative active:top-px">Add to list</button></div>

                        <p className="mt-5">{movieData.overview}</p>
                    </div>
                </div>
                <div className="details-main-meta">
                    <div className="details-main-meta-inner">
                        
                    </div>
                </div>
            </div>

        </div>
    )
}