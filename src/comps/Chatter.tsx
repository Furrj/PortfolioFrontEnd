import React from "react";
import styles from "./Chatter.module.css";

//IMAGE
import screenshot from "../images/ChatterSS.png";

const Chatter = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.pictureBox}>
        <div className={styles.picture}>
          <img className={styles.screenshot} src={screenshot} alt="" />
        </div>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Chatter</h1>
          Social Media App
          <br />
          <a href="https://chatter-gyb5f.ondigitalocean.app/">
            chatter-gyb5f.ondigitalocean.app
          </a>
        </div>
      </div>
      <div className={styles.descripBox}></div>
    </div>
  );
};

export default Chatter;
