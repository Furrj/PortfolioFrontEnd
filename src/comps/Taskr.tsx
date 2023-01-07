import React from "react";
import styles from "./Taskr.module.css";

//IMAGE
import screenshot from "../images/TaskrSS.png";

const Taskr = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.pictureBox}>
        <div className={styles.picture}>
          <img className={styles.screenshot} src={screenshot} alt="" />
        </div>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Taskr</h1>
          Productivity App
          <br />
          <a href="https://taskr-zerun.ondigitalocean.app">
            taskr-zerun.ondigitalocean.app/mytodos
          </a>
        </div>
      </div>
      <div className={styles.descripBox}></div>
    </div>
  );
};

export default Taskr;
