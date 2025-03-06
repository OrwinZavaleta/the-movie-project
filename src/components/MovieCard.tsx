import { Movie } from "../types/MovieProvider";
import { useFavoriteContext } from "../contexts/FavoriteContext";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { isFavorite, addToFavorites, removeFromFavorites } =
    useFavoriteContext();

  const favorite = isFavorite(movie.id);

  const handleFavoriteClick = (e: React.FormEvent) => {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  return (
    <>
      <div className="movie-card">
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "/no-image.jpg"
            }
            alt={movie.title}
          />
          <button className="favorite-btn" onClick={handleFavoriteClick}>
            {favorite ? "❤️" : "🤍"}
          </button>
        </div>

        <div className="mt-4">
          <h3>{movie.title}</h3>
          <div className="content">
            <div className="rating">
              <img src="star.svg" alt="Star Icon" />
              <p>
                {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
              </p>

              <span>•</span>

              <p className="lang">{movie.original_language}</p>

              <span>•</span>

              <p className="year">
                {movie.release_date ? movie.release_date.split("-")[0] : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
