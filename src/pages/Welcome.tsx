import { useNavigate } from "react-router-dom";
import Search from "../components/Search";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <>
      <main>
        <div className="pattern">
          <div className="wrapper">
            <header className="flex flex-col content-center items-center justify-center space-y-8">
              <img src="/hero.png" alt="hero banner" />
              <h1>
                Find <span className="text-gradient">Movie</span> You'll Enjoy
                Without the Hassle
              </h1>
              <Search />
              <button
                className="bg-dark-100 hover:bg-light-100/20 text-white px-6 py-2 rounded-lg transition-colors font-medium mt-4"
                onClick={handleClick}
              >
                Go to the Home Page
              </button>
            </header>
          </div>
        </div>
      </main>
    </>
  );
};

export default Welcome;
