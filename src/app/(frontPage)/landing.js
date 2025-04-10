import { fetchFromTMDB } from "@/lib/tmdb";
import { Carousel } from "./(carousal)/Carousel";
import NowShowing from "./nowShowing";
import Popular from "./popular";
import TopRated from "./topRated";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loadingSpinner";

const popularEndpoint = '/movie/popular';
const genreListEndpoint = '/genre/movie/list'

async function MovieCarousel() {
    const popularMovieResponse = await fetchFromTMDB(popularEndpoint);
    const movieGenreResponse = await fetchFromTMDB(genreListEndpoint);
    
    let movieData, genreData
    let genreMap = {}
    
    if (popularMovieResponse.status === 'success') {
        movieData = popularMovieResponse.data.results
    }

    if (movieGenreResponse.status === 'success') {
        genreData = movieGenreResponse.data.genres
        genreData.forEach(element => {
            genreMap[element.id] = element.name
        });
    }

    if (movieData || genreData){
        return <Carousel movieData = {movieData} genreData = {genreMap}/>
    }

    return <div className="text-red-500">Error loading movies</div>;
}

export default function Landing(){
    
    return (
        <div >
            <div className="pl-20 pr-20">
                {/* <Suspense fallback={<LoadingSpinner />}>
                    <MovieCarousel />
                </Suspense> */}
                <MovieCarousel />
            </div>
            <div className="w-full max-w-8xl mx-auto p-4 sm:p-6 md:p-10 flex flex-col gap-6">
                <NowShowing />
                <Popular />
                <TopRated />
            </div>
        </div>
      );
}