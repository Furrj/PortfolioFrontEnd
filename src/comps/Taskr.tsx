import React from "react";
import styles from "./Taskr.module.css";

//IMAGE
import screenshot from "../images/TaskrSS.png";

const Taskr = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.pictureBox}>
        <div className={styles.picture}>
          <img className={styles.screenshot} src={screenshot} alt="" />
        </div>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Taskr</h1>
          Productivity App
        </div>
      </div>
      <div className={styles.descripBox}>
        <div className={styles.descripLeft}>
          <ul>
            <li>Account creation and full CRUD capability for tasks</li>
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
              <a href="https://taskr-zerun.ondigitalocean.app/">Link to site</a>
            </li>
            <li>
              <a href="https://hub.docker.com/r/fratersks/taskr">Docker Repo</a>
            </li>
            <li>
              <a href="https://github.com/Furrj/Todo2ServerTypescript">
                Backend GitHub Repo
              </a>
            </li>
            <li>
              <a href="https://github.com/Furrj/Todo2TypescriptClient">
                Frontend GitHub Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Taskr;
