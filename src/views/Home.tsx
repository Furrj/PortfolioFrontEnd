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
        <a href="#box2" className={styles.scrollDownBox1}>
          <div>
            <i className="fa-solid fa-arrow-down" />
          </div>
        </a>
      </div>
      <div className={styles.box2} id="box2">
        <a href="#box1" className={styles.scrollUpBox2}>
          <div>
            <i className="fa-solid fa-arrow-up" />
          </div>
        </a>
        <a href="#" className={styles.scrollDownBox2}>
          <div>
            <i className="fa-solid fa-arrow-down" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
