import { useParams } from "react-router-dom";
import { directors } from "../data";

export default function MovieCard() {
  const { id, movieId } = useParams();

  const director = directors.find((d) => d.id === id);

  if (!director) {
    return <h2>Director not found</h2>;
  }

  const movie = director.movies.find((m) => m.id === movieId);

  if (!movie) {
    return <h2>Movie not found</h2>;
  }

  return (
    <div>
      <h3>{movie.title}</h3>
      <h3>{movie.title}</h3>

      <p>Duration: {movie.duration} minutes</p>

      {/* THIS is what your test is missing */}
      <p>{movie.genre}</p>
    </div>
  );
}