import NavBar from "../components/NavBar";

function About() {
  return (
    <>
      <NavBar />

      <main>
        <h1>About the Movie Directory 🎞️</h1>

        <p>
          This application showcases a list of notable film directors and their works.
        </p>

        <ul>
          <li>Browse directors and films</li>
          <li>Add new directors</li>
          <li>View movie details</li>
          <li>Add new movies</li>
        </ul>

        <p>
          Built with React and React Router v6.
        </p>
      </main>
    </>
  );
}

export default About;