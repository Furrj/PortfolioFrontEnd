import React from "react";
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

const Home: React.FC = () => {
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          similique sit necessitatibus culpa nobis debitis autem. Quae
          aspernatur consequatur iure sunt, ipsa odio delectus officiis
          accusantium, distinctio, corrupti quo dignissimos. Reiciendis est
          soluta eius voluptatem hic dignissimos quas modi rerum? Et, dolorum
          enim minus, nisi minima saepe quidem illum labore nihil inventore
          praesentium temporibus impedit esse expedita neque est architecto?
          Aperiam ratione molestias quibusdam necessitatibus velit aliquam esse
          quam perspiciatis, rerum minus, laboriosam unde qui est, magnam quod
          iste. Cum ipsa aspernatur quae eligendi dolor? Ipsum architecto dolore
          numquam quae!
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
        <a href="#" className={styles.scrollDownBox3}>
          <div>
            <i className="fa-solid fa-arrow-down" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
