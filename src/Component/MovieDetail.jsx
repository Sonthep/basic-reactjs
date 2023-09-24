
const  MovieDetail = ({movie}) => {
    return (
<li className="movie rounded-md border-2 w-[13rem] mt-2 font-serif" key={movie.id}>
  <h1 className="text-center font-bold mt-2 text-[18px]">{movie.title}</h1>
  <img 
  src={movie.poster} 
  alt={movie.title}
  className="h-auto" />
  <p>
    by {movie.director}
    was released on {movie.year}
  </p>
  <p>Rating: {movie.rating}</p>
</li>
    )
}

export default MovieDetail
