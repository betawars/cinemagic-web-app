import { fetchFromTMDB } from "@/lib/tmdb"
import DetailsPage from "./detailComponents/detailsPage"



export default async function MovieDetails({params}){
    const { id } = await params

    const movieDetailsEndpoint = `/movie/${id}`

    async function MovieDetailsData(){
        const popularMoviesResponse = await fetchFromTMDB(movieDetailsEndpoint)
        let movieData
        if (popularMoviesResponse.status === 'success'){
            movieData = popularMoviesResponse.data
        }
        if (movieData){
            return <DetailsPage movieData = {movieData}/>
        }
        return <div className="text-red-500">Error loading movies</div>;
    }


    return(<div>
        <MovieDetailsData />
    </div>)

}
