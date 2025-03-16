import React, { useState } from "react";
import styles from "./Switcher.module.scss";

const Switcher = () => {
  const [activeTab, setActiveTab] = useState("live");

  return (
    <div className={styles.tabContainer}>
      <button
        className={`${styles.tab} ${activeTab === "live" ? styles.active : ""}`}
        onClick={() => setActiveTab("live")}
        role="tab"
        aria-selected={activeTab === "live"}
      >
        Live
      </button>
      <button
        className={`${styles.tab} ${activeTab === "upcoming" ? styles.active : ""}`}
        onClick={() => setActiveTab("upcoming")}
        role="tab"
        aria-selected={activeTab === "upcoming"}
      >
        Upcoming
      </button>
    </div>
  );
};

export default Switcher;
