import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FavouritesPage from "./components/FavouritesPage/FavouritesPage";
import SquadPage from "./components/SquadPage/SquadPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/squad" element={<SquadPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
