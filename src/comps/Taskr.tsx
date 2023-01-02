import React from "react";
import styles from "./Taskr.module.css";

const Taskr = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.pictureBox}>
        <div className={styles.picture}></div>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Taskr</h1>
          Productivity App
        </div>
      </div>
      <div className={styles.descripBox}></div>
    </div>
  );
};

export default Taskr;
