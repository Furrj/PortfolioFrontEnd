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
              Account creation and full CRUD capability for tasks
            </li>
            <li>Create and track tasks</li>
            <li>Use dashboard to sort completed and uncompleted tasks</li>
          </ul>
          <hr />
          <ul>
            <li>Deployed on DigitalOcean as App using Docker Image</li>
            <li>Backend: NodeJS w/ Express & MongoDB Atlas</li>
            <li>Frontend: React w/ Typescript</li>
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
              <a href="https://github.com/Furrj/Todo2ServerTypescript">
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
