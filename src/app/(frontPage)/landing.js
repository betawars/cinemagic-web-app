import { fetchFromTMDB } from "@/lib/tmdb";
import { Carousel } from "./(carousal)/Carousel";
import NowShowing from "./(movie strips)/nowShowing";
import Popular from "./(movie strips)/popular";
import TopRated from "./(movie strips)/topRated";

const popularEndpoint = '/movie/popular';
const nowPlayingEndpoint = '/movie/now_playing'
const genreListEndpoint = '/genre/movie/list'

async function MovieCarousel() {
    const nowPlayingMoviesResponse = await fetchFromTMDB(nowPlayingEndpoint);
    const movieGenreResponse = await fetchFromTMDB(genreListEndpoint);
    
    let movieData, genreData
    let genreMap = {}
    
    if (nowPlayingMoviesResponse.status === 'success') {
        movieData = nowPlayingMoviesResponse.data.results
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

async function PopularMovieStrip(){
    const popularMoviesResponse = await fetchFromTMDB(popularEndpoint)
    let movieData
    if (popularMoviesResponse.status === 'success'){
        movieData = popularMoviesResponse.data.results
    }

    if (movieData){
        return <Popular movieData = {movieData}/>
    }
    
}

export default function Landing(){
    
    return (
        <div >
            <div className="pl-20 pr-20">
                <MovieCarousel />
            </div>
            <div className="w-full max-w-8xl mx-auto p-4 sm:p-6 md:p-10 flex flex-col gap-6">
                <PopularMovieStrip/>
                <NowShowing />
                <TopRated />
            </div>
        </div>
      );
}