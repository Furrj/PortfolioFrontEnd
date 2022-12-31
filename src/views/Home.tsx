import React from "react";
import styles from "./Home.module.css";

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
        <div className={styles.skillsBox}>
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
