import { useState } from "react";
import { SearchMovies } from "../services/api";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/search");

    if (!searchQuery.trim()) return;

    if (loading) return;

    try {
      const searchResults = await SearchMovies(searchQuery);
      if (searchResults.length === 0) {
        setError("Nothing here...");
        setMovies(searchResults);
      } else {
        setError("");
        setMovies(searchResults);
      }
    } catch (err) {
      console.error(`Error searching movies: ${err}`);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <>
      <div className="search">
        <div>
          <img src="search.svg" alt="search" />

          <div className="flex justify-end items-center w-full">
            <input
              type="text"
              placeholder="Search through thousands of movies"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-light-100/20 hover:bg-light-100/30 text-white px-4 py-1 rounded-md transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
