const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/discover/movie?sort_by=popularity.desc`,
    API_OPTIONS
  );
  const data = await response.json();
  return data.results;
};
