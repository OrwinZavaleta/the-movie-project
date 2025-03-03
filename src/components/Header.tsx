const Header = () => {
  return (
    <>
      <nav className="bg-[#0f0d23] py-4 px-6 shadow-md">
        <ul className="flex items-center space-x-8 text-white">
          <li className="mr-auto">
            <a href="/home">
              <img src="/logo.png" alt="logo image" className="h-10 w-auto" />
            </a>
          </li>
          <li>
            <a
              href="/home"
              className="font-medium hover:text-light-100 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/search"
              className="font-medium hover:text-light-100 transition-colors"
            >
              Search
            </a>
          </li>
          <li>
            <a
              href="/favorites"
              className="font-medium hover:text-light-100 transition-colors"
            >
              Favorites
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
