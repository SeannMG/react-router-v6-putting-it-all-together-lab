import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DirectorList() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("/directors")
      .then(res => res.json())
      .then(setDirectors);
  }, []);

  return (
    <div>
      <h2>Directors List</h2>

      {directors.map(d => (
        <div key={d.id}>
          <h3>{d.name}</h3>
          <Link to={`/directors/${d.id}`}>View Director</Link>
        </div>
      ))}
    </div>
  );
}

export default DirectorList;