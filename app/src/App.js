import "./App.scss";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import FavouritesPage from "./components/FavouritesPage/FavouritesPage";
import SquadPage from "./components/SquadPage/SquadPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" component={HomePage} />
          <Route path="/favourites" component={FavouritesPage} />
          <Route path="/squad" component={SquadPage} />
        </Routes>
      </Router>
      <HomePage/>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
