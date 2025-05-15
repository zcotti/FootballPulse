import React, { useCallback } from "react";
import styles from "./MatchCard.module.scss";

import PL from "../../Images/LeagueImg/PL.svg";
import PD from "../../Images/LeagueImg/PD.svg";
import SA from "../../Images/LeagueImg/SA.svg";
import BL1 from "../../Images/LeagueImg/BL1.svg";
import FL1 from "../../Images/LeagueImg/FL1.svg";

function MatchCard({ match }) {
  const titleLeague = {
    PL: "Premier League",
    PD: "La Liga",
    SA: "Serie A",
    BL1: "Bundesliga",
    FL1: "Ligue 1",
  };

  const leagueImages = {
    PL,
    PD,
    SA,
    BL1,
    FL1,
  };

  const handleStatsBtn = useCallback(async (id) => {
    try {
      const response = await fetch(`/api/matches/stats?id=${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
      throw error;
    }
  }, []);

  return (
    <div
      className={styles.cardLive}
      style={{
        backgroundImage: `url(${leagueImages[match.competition.code]})`,
      }}
    >
      <p className={styles.leagueName}>{titleLeague[match.competition.code]}</p>
      <div className={styles.matchInfo}>
        <div className={styles.teamWrapper}>
          <img src={match.homeTeam.crest} alt={match.homeTeam.name} />
          <p className={styles.splitName}>{match.homeTeam.name}</p>
        </div>
        <div className={styles.matchStatus}>
          <div className={styles.liveIndicator}>{match.status}</div>
          <div className={styles.scoreText}>
            {match.score.fullTime.home} : {match.score.fullTime.away}
          </div>
          <button
            onClick={() => {
              handleStatsBtn(match.id);
            }}
            className={styles.btnStats}
          >
            STATS
          </button>
        </div>
        <div className={styles.teamWrapper}>
          <img src={match.awayTeam.crest} alt={match.awayTeam.name} />
          <p className={styles.splitName}>{match.awayTeam.name}</p>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
