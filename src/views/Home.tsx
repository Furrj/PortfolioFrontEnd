import React from "react";
import styles from "./Home.module.css";
import picture from "../images/testPic.jpg";

const Home = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.title}>
        <span>Jackson Furr</span>
        <br />
        <span>FullStack Developer</span>
      </div>
    </div>
  );
};

export default Home;
