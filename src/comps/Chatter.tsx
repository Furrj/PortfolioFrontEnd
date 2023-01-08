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
        </div>
      </div>
      <div className={styles.descripBox}>
        <div className={styles.descripLeft}>
          <ul>
            <li>Account creation and full CRUD capability for posts</li>
            <li>Allows anonymous posting without CRUD capability</li>
            <li>Posts track upvotes/downvotes</li>
            <li>Communities for individual topics</li>
            <li>Light/Dark color themes</li>
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
              <a href="https://chatter-gyb5f.ondigitalocean.app/">
                Link to site
              </a>
            </li>
            <li>
              <a href="https://hub.docker.com/r/fratersks/chatter">
                Docker Repo
              </a>
            </li>
            <li>
              <a href="https://github.com/Furrj/ChatterAPI">
                Backend GitHub Repo
              </a>
            </li>
            <li>
              <a href="https://github.com/Furrj/ChatterClient">
                Frontend GitHub Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chatter;
