import React from "react";
import styles from "./Switcher.module.scss";

const Switcher = ({ activeTab, onTabChange }) => {
  return (
    <div className={styles.tabContainer}>
      <button
        className={`${styles.tab} ${activeTab === "live" ? styles.active : ""}`}
        onClick={() => onTabChange("live")}
        role="tab"
        aria-selected={activeTab === "live"}
      >
        Live
      </button>
      <button
        className={`${styles.tab} ${
          activeTab === "upcoming" ? styles.active : ""
        }`}
        onClick={() => onTabChange("upcoming")}
        role="tab"
        aria-selected={activeTab === "upcoming"}
      >
        Upcoming
      </button>
    </div>
  );
};

export default Switcher;
