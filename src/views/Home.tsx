import React from "react";
import styles from "./Home.module.css";
import picture from "../images/testPic.jpg";

const Home = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.heroCont}>
        <img src={picture} alt="Picture Of Me" className={styles.heroImg} />
        <div className={styles.textCont}>
          <h3 className={styles.heroTextName}>Jackson Furr</h3>
          <h3 className={styles.heroTextDescription}>Fullstack Dev</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
