import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { Movie } from "../types/MovieProvider";

interface FavoriteContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}

const defaultValue: FavoriteContextType = {
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  isFavorite: () => false,
};

interface FavoriteProviderProps {
  children: ReactNode;
}

export const FavoriteContext = createContext<FavoriteContextType>(defaultValue);

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    // Inicializar el estado con los datos del localStorage
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie: Movie) => movie.id !== movieId));
  };

  const isFavorite = (movieId: number) => {
    return favorites.some((movie: Movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <>
      <FavoriteContext.Provider value={value}>
        {children}
      </FavoriteContext.Provider>
    </>
  );
};
