import React, { useCallback, useState } from "react";
import photo from "../../Images/ball.svg";
import styles from "./HomePage.module.scss";
import Title from "../Title/Title";
import SearchForm from "../SearchForm/SearchForm";
import Switcher from "../Switcher/Switcher";
import MatchesCards from "../MatchesCards/MatchesCards";
import FilterLeague from "../FilterLeague/FilterLeague";

function HomePage() {
  const [selectedLeague, setSelectedLeague] = useState("ALL");
  const [showLiveOnly, setShowLiveOnly] = useState("live");

  const handleLeagueChange = useCallback(
    (league) => setSelectedLeague(league),
    []
  );

  return (
    <main>
      <div className={styles.mainInfo}>
        <div className={styles.titleText}>
          <Title />
          <SearchForm />
        </div>
        <div className={styles.imageCont}>
          <img src={photo} alt="" />
        </div>
      </div>
      <div className={styles.matchesInfo}>
        <div className={styles.filters}>
          <Switcher activeTab={showLiveOnly} onTabChange={setShowLiveOnly} />
          <FilterLeague
            OnSelectLeague={selectedLeague}
            setSelected={handleLeagueChange}
          />
        </div>
        <MatchesCards league={selectedLeague} />
      </div>
    </main>
  );
}

export default HomePage;
