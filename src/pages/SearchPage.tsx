import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import { SearchMovies } from "../services/api";
import { Movie } from "../types/MovieProvider";
import { updateSearchCount } from "../services/appwrite";

const SearchPage = () => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("query");

    if (searchQuery) {
      performSearch(searchQuery);
    }
  }, [location.search]);

  const performSearch = async (query: string) => {
    setLoading(true);
    setErrorMessage("");

    try {
      const searchResults = await SearchMovies(query);

      if (searchResults.length === 0) {
        setErrorMessage("No movies found for your search ...");
      } else {
        setMoviesList(searchResults);
        setErrorMessage("");
      }

      if (searchResults.length > 0) {
        await updateSearchCount(query, searchResults[0]);
      }
    } catch (err) {
      console.error(`Error searching movies: ${err}`);
      setErrorMessage("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="pattern">
        <div className="wrapper">
          <Search />
          <section className="all-movies">
            <h2 className="mt-[40px]">Search Results</h2>
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
                  <p className="text-white">
                    {errorMessage || "Search for movies to see results"}
                  </p>
                )}
              </ul>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default SearchPage;
