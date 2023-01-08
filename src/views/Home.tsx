import React, { useState } from "react";
import styles from "./Home.module.css";

//IMAGES
import HTML from "../images/HTML5.png";
import CSS from "../images/CSS3.png";
import JS from "../images/Javascript.png";
import TS from "../images/Typescript.png";
import Mongo from "../images/MongoDB.png";
import Node from "../images/Node.png";
import ReactLogo from "../images/React.png";
import SQL from "../images/SQL.png";
import Docker from "../images/Docker.png";

//PORTFOLIO SLIDES
import Chatter from "../comps/Chatter";
import Taskr from "../comps/Taskr";
import Testr from "../comps/Testr";

const Home: React.FC = () => {
  const [activeSlideNum, setActiveSlideNum] = useState<number>(0);

  const increaseSlideNum = () => {
    if (activeSlideNum < 2) {
      setActiveSlideNum(activeSlideNum + 1);
    } else return;
  };

  const decreaseSlideNum = () => {
    if (activeSlideNum > 0) {
      setActiveSlideNum(activeSlideNum - 1);
    } else return;
  };

  return (
    <div className={styles.mainCont}>
      <div className={styles.stars1}></div>
      <div className={styles.stars2}></div>
      <div className={styles.stars3}></div>
      <div className={styles.box1} id="landing">
        <div className={styles.title}>
          <span>Jackson Furr</span>
          <br />
          <span>FullStack Developer</span>
        </div>
        <a href="#about" className={styles.scrollDownBox1}>
          <div>
            <i className="fa-solid fa-arrow-down" />
          </div>
        </a>
      </div>
      <div className={styles.box2} id="about">
        <a href="#landing" className={styles.scrollUpBox2}>
          <div>
            <i className="fa-solid fa-arrow-up" />
          </div>
        </a>
        <div className={styles.aboutBox}>
          Hey there! I'm a FullStack developer from Atlanta, GA. Most of my
          experience is with MERN and PERN stacks, and I have an affinity for
          back-end work.
        </div>
        <a href="#skills" className={styles.scrollDownBox2}>
          <div>
            <i className="fa-solid fa-arrow-down" />
          </div>
        </a>
      </div>
      <div className={styles.box3} id="skills">
        <a href="#about" className={styles.scrollUpBox2}>
          <div>
            <i className="fa-solid fa-arrow-up" />
          </div>
        </a>
        <h1 className={styles.skillsTitle}>Skills</h1>
        <div className={styles.skillsBox}>
          <div className={styles.box}>
            <img className={styles.htmlLogo} src={HTML} alt="HTML5 Logo" />
          </div>
          <div className={styles.box}>
            <img className={styles.cssLogo} src={CSS} alt="" />
          </div>
          <div className={styles.box}>
            <img className={styles.sqlLogo} src={SQL} alt="" />
          </div>
          <div className={styles.box}>
            <img className={styles.jsLogo} src={JS} alt="" />
          </div>
          <div className={styles.box}>
            <img className={styles.tsLogo} src={TS} alt="" />
          </div>
          <div className={styles.box}>
            <img className={styles.reactLogo} src={ReactLogo} alt="" />
          </div>
          <div className={styles.box}>
            <img className={styles.nodeLogo} src={Node} alt="" />
          </div>
          <div className={styles.box}>
            <img src={Mongo} alt="" />
          </div>
          <div className={styles.box}>
            <img className={styles.dockerLogo} src={Docker} alt="" />
          </div>
        </div>
        <a href="#portfolio" className={styles.scrollDownBox3}>
          <div>
            <i className="fa-solid fa-arrow-down" />
          </div>
        </a>
      </div>
      <div className={styles.box4} id="portfolio">
        <a href="#skills" className={styles.scrollUpBox2}>
          <div>
            <i className="fa-solid fa-arrow-up" />
          </div>
        </a>
        <h1 className={styles.portfolioTitle}>Portfolio</h1>
        <div className={styles.portBox}>
          {activeSlideNum > 0 && (
            <div className={styles.portLeftBtn} onClick={decreaseSlideNum}>
              <i className="fa-solid fa-arrow-left" />
            </div>
          )}
          {activeSlideNum === 0 && <Chatter />}
          {activeSlideNum === 1 && <Taskr />}
          {activeSlideNum === 2 && <Testr />}
          {activeSlideNum < 2 && (
            <div className={styles.portRightBtn} onClick={increaseSlideNum}>
              <i className="fa-solid fa-arrow-right" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
