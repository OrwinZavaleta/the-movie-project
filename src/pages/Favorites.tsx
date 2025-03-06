import MovieCard from "../components/MovieCard";
import Search from "../components/Search";
import { useFavoriteContext } from "../contexts/FavoriteContext";

const Favorites = () => {
  const { favorites } = useFavoriteContext();

  if (favorites && favorites.length) {
    return (
      <>
        <div className="pattern">
          <Search />
          <div className="wrapper">
            <h2>Favorites Movies</h2>
            <div className="all-movies">
              <ul className="movie-list">
                {favorites.map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="pattern">
        <Search />
        <div className="wrapper text-white">
          <h2>No Favorites Movies Yet</h2>
          <p>Start adding movies to your favorites and they will appear here</p>
        </div>
      </div>
    </>
  );
};

export default Favorites;
