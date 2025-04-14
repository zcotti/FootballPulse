import React from "react";
import styles from "./MatchCard.module.scss";

function MatchCard({ match }) {
  const titleLeague = {
    PL: "Premier League",
    PD: "La Liga",
    SA: "Serie A",
    BL1: "Bundesliga",
    FL1: "Ligue 1",
  };

  const leagueImages = {
    PL: require("../../Images/LeagueImg/PL.svg").default,
    PD: require("../../Images/LeagueImg/PD.svg").default,
    SA: require("../../Images/LeagueImg/SA.svg").default,
    BL1: require("../../Images/LeagueImg/BL1.svg").default,
    FL1: require("../../Images/LeagueImg/FL1.svg").default,
  };

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
          <button className={styles.btnStats}>STATS</button>
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
