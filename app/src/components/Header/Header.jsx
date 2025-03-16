import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/emblem.svg";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.imgLogo} src={logo} alt="Эмблема" />
        <p className={styles.logoText}>
          <span className={styles.textGreen}>Football</span>Pulse
        </p>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/squad">Squad</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.lang}>
        <p>RU</p>
        <p className={styles.active}>EN</p>
      </div>
      <button className={styles.signInBtn}>Sing In</button>
    </header>
  );
}

export default Header;
