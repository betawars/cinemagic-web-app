import {PopularMovieStrip,  MovieCarousel, NowShowingMovieStrip, TopRatedMovieStrip}  from "./(dataFetch)/dataFetch";
export default function Landing(){
    
    return (
        <div >
            <div className="pl-20 pr-20">
                <MovieCarousel />
            </div>
            <div className="w-full max-w-8xl mx-auto p-4 sm:p-6 md:p-10 flex flex-col gap-6">
                <PopularMovieStrip/>
                <TopRatedMovieStrip/>
                <NowShowingMovieStrip/>
            </div>
        </div>
      );
}