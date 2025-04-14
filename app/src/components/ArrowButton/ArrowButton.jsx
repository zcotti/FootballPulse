import React from "react";
import styles from "./ArrowButton.module.scss";
import leftArrow from "../../Images/ArrowImg/leftArrow.svg";
import rightArrow from "../../Images/ArrowImg/rightArrow.svg";

const ArrowButton = React.memo(({ direction, onClick, disabled }) =>{
  const arrowSrc = direction === "left" ? leftArrow : rightArrow;
  const altText = `${direction === "left" ? "Left" : "Right"} Arrow`;

  return (
    <button className={styles.arrow} onClick={onClick} disabled={disabled}>
      <img src={arrowSrc} alt={altText} />
    </button>
  );
});

export default ArrowButton;
