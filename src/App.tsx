import { useState, useEffect } from "react";
import Search from "./components/Search";
import { getPopularMovies, SearchMovies } from "./services/api";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { Movie } from "./types/movie";
import { useDebounce } from "react-use";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setErrorMessage("");
      try {
        const popularMovies = debouncedSearchTerm
          ? await SearchMovies(debouncedSearchTerm)
          : await getPopularMovies();

        setMoviesList(popularMovies);
      } catch (err) {
        console.log(err);
        setErrorMessage("Error loading the movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, [debouncedSearchTerm]);

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
            <h2 className="mt-[40px] text-center">All movies:</h2>
            {errorMessage !== "" && (
              <p className="text-red-500">{errorMessage}</p>
            )}

            {loading ? (
              <Spinner />
            ) : (
              <ul className="movie-list">
                {Array.isArray(moviesList) && moviesList.length > 0 ? (
                  moviesList.map((movie: Movie) => <MovieCard movie={movie} />)
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
