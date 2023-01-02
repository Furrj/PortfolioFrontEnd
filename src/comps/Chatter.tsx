import React from "react";
import styles from "./Chatter.module.css";

const Chatter = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.pictureBox}>
        <div className={styles.picture}></div>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Chatter</h1>
          Social Media App
        </div>
      </div>
      <div className={styles.descripBox}></div>
    </div>
  );
};

export default Chatter;
