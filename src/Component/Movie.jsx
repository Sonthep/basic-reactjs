import { movies } from "./Data/movieList"
import MovieDetail from "./MovieDetail";

const fetchMovie = () =>{
    return movies;
}

const Movie = () => {
    return(
        <div className="movie-container flex flex-col ">
            <h1 className="text-center font-extrabold text-[4rem] ">Movies</h1>
            <ul className="Movie-list grid grid-cols-3 gap-2 place-items-center">
                {
                    movies.map((movie) =>(
                        <MovieDetail key={movie.id} movie={movie}/>
                    ))
                }
            </ul>
        </div>
    )
  }

  export default Movie