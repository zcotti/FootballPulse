import React from "react";
import styles from "./FilterLeague.module.scss";

function FilterLeague({ OnSelectLeague, setSelected }) {
  return (
    <div className={styles.filterGroup}>
      <label className={styles.filterLabel}>Filter by league:</label>
      <select
        className={styles.filterLeague}
        value={OnSelectLeague}
        onChange={(e) => setSelected(e.target.value)}
      >
        <option value="ALL">All Leagues</option>
        <option value="PD">La Liga (ESP)</option>
        <option value="PL">Premier League (ENG)</option>
        <option value="SA">Serie A (ITA)</option>
        <option value="BL1">Bundesliga (GER)</option>
        <option value="FL1">Ligue 1 (FRA)</option>
      </select>
    </div>
  );
}

export default FilterLeague;
