import React from "react";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.box1} id="box1">
        <div className={styles.title}>
          <span>Jackson Furr</span>
          <br />
          <span>FullStack Developer</span>
        </div>
        <div className={styles.scrollDownBox1}>
          <a href="#box2">
            <i className="fa-solid fa-arrow-down" />
          </a>
        </div>
      </div>
      <div className={styles.box2} id="box2">
        <div className={styles.scrollUpBox2}>
          <a href="#box1">
            <i className="fa-solid fa-arrow-up" />
          </a>
        </div>
        <div className={styles.scrollDownBox2}>
          <a href="#">
            <i className="fa-solid fa-arrow-down" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
