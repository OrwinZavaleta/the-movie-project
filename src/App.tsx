import { useState, useEffect } from "react";
import Search from "./components/Search";
import { getPopularMovies } from "./services/api";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setErrorMessage("Error loading the movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  return (
    <>
      <main>
        <div className="pattern" />

        <div className="wrapper">
          <header>
            <img src="./hero.png" alt="hero Banner" />
            <h1>
              Find <span className="text-gradient">Movie</span> You'll Enjoy
              Without the Hassle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          <section className="all-movies">
            <h2>All movies</h2>

            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
