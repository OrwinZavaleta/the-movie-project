import { useState, useEffect } from "react";
import { Models } from "appwrite";
import { getPopularMovies } from "../services/api";
import { getTrendingMovies } from "../services/appwrite";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import { Movie } from "../types/MovieProvider";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const [trendingMovies, setTrendingMovies] = useState<Models.Document[]>([]);

  useEffect(() => {
    const loadPopularMovies = async () => {
      setErrorMessage("");
      try {
        const popularMovies = await getPopularMovies();
        setMoviesList(popularMovies);
      } catch (err) {
        console.log(err);
        setErrorMessage("Error loading the movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  });

  useEffect(() => {
    loadTrendingMovies();
  }, []);
  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      if (movies) {
        setTrendingMovies(movies);
      }
    } catch (error) {
      console.error(`Error fetching trending movies: ${error}`);
    }
  };

  return (
    <>
      <main className="pattern">
        <div className="wrapper">
          <Search />

          {trendingMovies.length > 0 && (
            <section className="trending">
              <h2>Trending Movies</h2>
              <ul>
                {trendingMovies.map((movie, index) => (
                  <li key={movie.$id}>
                    <p> {index + 1}</p>
                    <img src={movie.poster_url} alt={movie.title} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="all-movies">
            <h2 className="mt-[40px]">All movies</h2>
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

export default Home;
