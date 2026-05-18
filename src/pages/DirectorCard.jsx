import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

function DirectorCard() {
  const { id } = useParams();
  const [director, setDirector] = useState(null);

  useEffect(() => {
    fetch("/directors")
      .then(res => res.json())
      .then(data => {
        const found = data.find(d => d.id === id);
        setDirector(found || null);
      });
  }, [id]);

  if (!director) return <p>Director not found</p>;

  return (
    <div>
      <h2>{director.name}</h2>
      <p>{director.bio}</p>

      {director.movies.map(movie => (
        <Link key={movie.id} to={`movies/${movie.id}`}>
          {movie.title}
        </Link>
      ))}

      <Outlet />
    </div>
  );
}

export default DirectorCard;