import "./App.scss";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage.jsx";
import FavouritesPage from "./components/FavouritesPage/FavouritesPage.jsx";
import SquadPage from "./components/SquadPage/SquadPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

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
