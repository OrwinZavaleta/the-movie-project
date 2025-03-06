import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search submitted:", searchQuery); // Add this for debugging

    if (!searchQuery.trim()) return;
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);

    setSearchQuery("");
  };

  return (
    <>
      <div className="search">
        <div>
          <form
            onSubmit={handleSearch}
            className="flex justify-between items-center w-full"
          >
            <img src="/search.svg" alt="search" className="w-6 h-6 mr-2" />
            <div className="flex-1 mx-2">
              <input
                type="text"
                placeholder="Search through thousands of movies"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-light-100/20 hover:bg-light-100/30 text-white px-4 py-2 rounded-md transition-colors"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
