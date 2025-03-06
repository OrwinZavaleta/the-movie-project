import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-[#0f0d23] py-4 px-6 shadow-md">
        <ul className="flex items-center space-x-8 text-white">
          <li className="mr-auto">
            <Link to="/home">
              <img src="/logo.png" alt="logo image" className="h-10 w-auto" />
            </Link>
          </li>
          <li>
            <Link
              to="/home"
              className="font-medium hover:text-light-100 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="font-medium hover:text-light-100 transition-colors"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="font-medium hover:text-light-100 transition-colors"
            >
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
