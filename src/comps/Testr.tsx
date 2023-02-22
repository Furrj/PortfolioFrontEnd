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
      <div className={styles.descripBox}>
        <div className={styles.descripLeft}>
          <ul>
            <li style={{ marginTop: 30 }}>
              Creates simple math quizzes for basic operations
            </li>
            <li>Input an upper and lower range as well as time limit</li>
            <li>See results and final score afterwards</li>
          </ul>
          <hr />
          <ul>
            <li>Deployed on DigitalOcean as App using Docker Image</li>
            <li>Made with React</li>
          </ul>
        </div>
        <div className={styles.descripRight}>
          <ul>
            <li>
              <a href="https://testr-yfdmd.ondigitalocean.app/">Link to site</a>
            </li>
            <li>
              <a href="https://hub.docker.com/r/fratersks/testr">Docker Repo</a>
            </li>
            <li>
              <a href="https://github.com/Furrj/Testr">
                GitHub Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testr;
