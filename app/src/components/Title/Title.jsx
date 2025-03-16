import React from "react";
import styles from "./Title.module.scss";

function Title() {
  return (
    <>
      <p className={styles.title}>
        <span>HEAD WHITE</span> FOOTBALL
      </p>
      <p className={styles.subTitleText}>
        Track every match in real-time, analyze detailed statistics, and get
        instant notifications about key events. Online football — everything you
        need in one place!
      </p>
    </>
  );
}

export default Title;
