import React, { useCallback, useEffect, useState } from "react";
import styles from "./MatchesCards.module.scss";
import MatchCard from "../MatchCard/MatchCard.jsx";
import ArrowButton from "../ArrowButton/ArrowButton.jsx";

const VISIBLE_CARDS = 3;

function MatchesCards({ league }) {
  const [matches, setMatches] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchMatches = useCallback(async () => {
    try {
      const response = await fetch(`/api/matches?league=${league}`);

      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
      
      const data = await response.json();
      console.log(data);
      setMatches(data.matches);
    } catch (error) {
      console.log(error);
    }
  }, [league]);

  useEffect(() => {
    fetchMatches();
  }, [fetchMatches]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + VISIBLE_CARDS;
      return next >= matches.length ? prev : next;
    });
  }, [matches.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - VISIBLE_CARDS, 0));
  }, []);

  const visibleMatches = matches.slice(
    currentIndex,
    currentIndex + VISIBLE_CARDS
  );

  return (
    <div className={styles.MatchesCont}>
      <ArrowButton
        direction={"left"}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      />
      {matches.length === 0 ? (
        <div className={styles.LoadText}>
          There are no active matches right now.
        </div>
      ) : (
        <div className={styles.cardsContainer}>
          {visibleMatches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </div>
      )}
      <ArrowButton
        direction={"right"}
        onClick={handleNext}
        disabled={currentIndex >= matches.length - VISIBLE_CARDS}
      />
    </div>
  );
}

export default MatchesCards;
