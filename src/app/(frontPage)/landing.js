import { fetchFromTMDB, fetchPopularMovies } from "@/lib/tmdb";
import { Carousel } from "./(carousal)/Carousel";
import NowShowing from "./nowShowing";
import Popular from "./popular";
import TopRated from "./topRated";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loadingSpinner";

const endpoint = '/movie/popular';

async function MovieCarousel() {
    const response = await fetchFromTMDB(endpoint);
    
    if (response.status === 'success') {
        const data = response.data.results
        return <Carousel data={data} />;
    }
    
    return <div className="text-red-500">Error loading movies</div>;
}

export default function Landing(){
    
    return (
        <div >
            <div className="pl-20 pr-20">
                <Suspense fallback={<LoadingSpinner />}>
                    <MovieCarousel />
                </Suspense>
            </div>
            <div className="w-full max-w-8xl mx-auto p-4 sm:p-6 md:p-10 flex flex-col gap-6">
                <NowShowing />
                <Popular />
                <TopRated />
            </div>
        </div>
      );
}