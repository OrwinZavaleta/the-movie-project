import Search from "../components/Search";

const Welcome = () => {
  return (
    <>
      <main>
        <div className="pattern">
          <div className="wrapper">
            <header>
              <img src="/hero.png" alt="hero banner" />
              <h1>
                Find <span className="text-gradient">Movie</span> You'll Enjoy
                Without the Hassle
              </h1>
              {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
            </header>
          </div>
        </div>
      </main>
    </>
  );
};

export default Welcome;
