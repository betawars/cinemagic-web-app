import { fetchFromTMDB } from "@/lib/tmdb";
import { genreListEndpoint, nowPlayingEndpoint, popularEndpoint, topRatedEndpoint } from "@/lib/enpoints";
import Popular from "../(fontComponents)/(movie strips)/popular";
import { Carousel } from "../(fontComponents)/(carousal)/Carousel";
import TopRated from "../(fontComponents)/(movie strips)/topRated";
import NowShowing from "../(fontComponents)/(movie strips)/nowShowing";


export async function PopularMovieStrip(){
    const popularMoviesResponse = await fetchFromTMDB(popularEndpoint)
    let movieData
    if (popularMoviesResponse.status === 'success'){
        movieData = popularMoviesResponse.data.results
    }
    if (movieData){
        return <Popular movieData = {movieData}/>
    }
    return <div className="text-red-500">Error loading movies</div>;
}

export async function MovieCarousel() {
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

export async function TopRatedMovieStrip(){
    const topRatedMovieResponse = await fetchFromTMDB(topRatedEndpoint)
    let movieData
    if (topRatedMovieResponse.status === 'success'){
        movieData = topRatedMovieResponse.data.results
    }
    if (movieData){
        return <TopRated movieData = {movieData}/>
    }
    return <div className="text-red-500">Error loading movies</div>;
}

export async function NowShowingMovieStrip(){
    const nowShowingMovieResponse = await fetchFromTMDB(nowPlayingEndpoint)
    let movieData
    if (nowShowingMovieResponse.status === 'success'){
        movieData = nowShowingMovieResponse.data.results
    }
    if (movieData){
        return <NowShowing movieData = {movieData}/>
    }
    return <div className="text-red-500">Error loading movies</div>;
}