import React from "react";
import telegramm from "../../Images/telegram.svg";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.nameText}>
        <span>Football</span>Pulse
      </p>
      <nav className={styles.navFooter}>
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
      <div>
        <p className={styles.numberPhone}>+7 908 728-80-82</p>
        <p className={styles.mail}>footballPulse@mail.ru</p>
      </div>
      <a href="https://web.telegram.org/" target="_blank" rel="noreferrer">
        <img src={telegramm} alt="Logo Telegram" />
      </a>
    </footer>
  );
}

export default Footer;
