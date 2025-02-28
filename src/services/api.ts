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
  fetch(`${BASE_URL}/movie/popular`, API_OPTIONS);
};
//make a fuction that can return an int

// hacer un try catch en la funcion en la que se llama con un useState para el error, el loading
