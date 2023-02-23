import React from "react";
import styles from "./Testr.module.css";

//IMAGES
import screenshot from "../images/PortfolioSS.png";

const Portfolio: React.FC = () => {
  return (
    <div className={styles.mainCont}>
      <div className={styles.pictureBox}>
        <div className={styles.picture}>
          <img className={styles.screenshot} src={screenshot} alt="" />
        </div>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>Portfolio</h1>
        </div>
      </div>
      <div className={styles.descripBox}>
        <div className={styles.descripLeft}>
          <ul>
            <li style={{ marginTop: 30 }}>
              Portfolio site to showcase personal projects
            </li>
            <li>Includes links to Github, LinkedIn, and resume</li>
            <li>Lists personal skills</li>
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
              <a href="https://hub.docker.com/repository/docker/fratersks/mydev">Docker Repo</a>
            </li>
            <li>
              <a href="https://github.com/Furrj/PortfolioAPI">Backend GitHub Repo</a>
            </li>
						<li>
              <a href="https://github.com/Furrj/PortfolioFrontEnd">Frontend GitHub Repo</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
