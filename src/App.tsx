import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import SearchPage from "./pages/SearchPage";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Header from "./components/Header";
import { FavoriteProvider } from "./contexts/FavoriteContext";

const App = () => {
  return (
    <>
      <FavoriteProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </FavoriteProvider>
    </>
  );
};

export default App;
