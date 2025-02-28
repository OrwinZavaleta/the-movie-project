import { useState, useEffect } from "react";
import Search from "./components/Search";
import { getPopularMovies } from "./services/api";

export interface Movie {
  title: string;
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setErrorMessage("");
      try {
        const popularMovies = await getPopularMovies();
        console.log(popularMovies);

        setMoviesList(popularMovies);
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
            <img src="/hero.png" alt="hero Banner" />
            <h1>
              Find <span className="text-gradient">Movie</span> You'll Enjoy
              Without the Hassle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </header>

          <section className="all-movies">
            <h2>All movies</h2>
            {errorMessage !== "" && (
              <p className="text-red-500">{errorMessage}</p>
            )}

            {loading ? (
              <p className="text-white">Loading...</p>
            ) : (
              <ul className="movie-list">
                {Array.isArray(moviesList) && moviesList.length > 0 ? (
                  moviesList.map((movie: Movie, index: number) => (
                    <li key={movie.title || index}>
                      <p className="text-white">
                        {movie.title || "Unknown Title"}
                      </p>
                    </li>
                  ))
                ) : (
                  <p className="text-white">No movies found</p>
                )}
              </ul>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
