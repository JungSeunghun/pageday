"use client"

import Image from "next/image"
import styles from "./infoButton.module.css"
import { useState } from "react";
import Confetti from "react-confetti";

export default function InfoButton() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000); // Confetti disappears after 3 seconds
  };

  return (
    <>
      <button className={styles.infoButton} onClick={handleButtonClick}>
        <Image src={"/paper_folding.svg"} alt="info button" width={60} height={80}/>
      </button>
      {showConfetti && <div className={styles.confetti}><Confetti /></div>}
    </>
  );
}