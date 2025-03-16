import React from "react";
import photo from "../../Images/ball.svg";
import styles from "./HomePage.module.scss";
import Title from "../Title/Title";
import SearchForm from "../SearchForm/SearchForm";
import Switcher from "../Switcher/Switcher";

function HomePage() {
  return (
    <div>
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
        <Switcher />
      </div>
    </div>
  );
}

export default HomePage;
