import "./styles.css"
import MoviePoster from "./moviePoster"

export default async function DetailsPage({ movieData }) {

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
                    <div className="mt-10 p-10">
                        <MoviePoster
                            src={`https://image.tmdb.org/t/p/w780${movieData.poster_path}`}
                            alt={movieData.title}
                        />
                    </div>
                </div>
                <div className="details-main-info">
                    <div className="mt-20">
                        <h2 className="text-5xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">{movieData.title}</h2>
                        <div className="mt-5">
                            <button className="cursor-pointer bg-[#c7b9d9] hover:bg-[#69a5ef] text-white font-sans text-[15px] px-5 py-2 rounded-[28px] border border-[#b9a7d7] shadow-sm hover:shadow-md active:relative active:top-px">Watch Now</button>
                            <button className="cursor-pointer ml-3 bg-[#ffffff] hover:bg-[#69a5ef] text-black font-sans text-[15px] px-5 py-2 rounded-[28px] border border-[#b9a7d7] shadow-sm hover:shadow-md active:relative active:top-px">Add to list</button></div>

                        <p className="mt-5">{movieData.overview}</p>
                    </div>
                </div>
                <div className="details-main-meta">
                    <div className="details-main-meta-overlay">
                        <div className="details-main-meta-inner p-5 mt-30">
                            <div className="flex gap-1"><p className="font-bold">Native title:</p><p>{movieData.original_title}</p></div>
                            <div className="flex gap-1"><p className="font-bold">Release date:</p><p>{movieData.release_date}</p></div>
                            <div className="flex gap-1"><p className="font-bold">Status:</p><p>{movieData.status}</p></div>
                            <div className="flex gap-1"><p className="font-bold">Available in:</p>{movieData.spoken_languages.map((e, idx) => {
                                return (<p key={idx}>{e.english_name},</p>)
                            })}</div>
                            <hr/>
                            <div className="flex flex-col gap-2"><p className="font-bold">Genres:</p>
                                <div className="flex flex-row gap-1">{movieData.genres.map((e, idx) => {
                                    return (
                                        <div key={idx} className="details-main-genre-chip">
                                            {e.name}
                                        </div>
                                    )
                                })}</div>
                            </div>
                            <hr/>
                            <div className="inline-block"><p className="font-bold">Produced by:</p>{movieData.production_companies.map((e, idx) => 
                            {
                                return (<p key={idx} >{e.name},</p>)
                            })}</div>
                            <div className="flex gap-1"><p className="font-bold">Country of origin:</p><p>{movieData.origin_country[0]}</p></div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}