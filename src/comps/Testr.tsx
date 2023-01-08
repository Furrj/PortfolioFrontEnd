import React from "react";
import styles from "./Testr.module.css";

//IMAGES
import screenshot from "../images/TestrSS.png";

const Testr: React.FC = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.pictureBox}>
        <div className={styles.picture}>
          <img className={styles.screenshot} src={screenshot} alt="" />
        </div>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Testr</h1>
          Quiz App
        </div>
      </div>
      <div className={styles.descripBox}></div>
    </div>
  );
};

export default Testr;
