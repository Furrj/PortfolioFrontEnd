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
import Git from "../images/Git.png";
import Figma from "../images/Figma.png";
import Svelte from "../images/Svelte.png";
import Headshot from "../images/Headshot1.jpg";

//RESUME
import Resume from "../files/Jackson_Furr_-_Junior_Web_Developer.pdf";

//PORTFOLIO SLIDES
import Chatter from "../comps/Chatter";
import Taskr from "../comps/Taskr";
import Testr from "../comps/Testr";
import Portfolio from "../comps/Portfolio";

//TS
interface IInput {
  email: string;
  message: string;
}

const initState: IInput = {
  email: "",
  message: "",
};

const Home: React.FC = () => {
  const [activeSlideNum, setActiveSlideNum] = useState<number>(0);
  const [input, setInput] = useState<IInput>(initState);
  const [messageSent, setMessageSent] = useState<boolean>(false);

  const sendMessage = async (): Promise<void> => {
    try {
      const send = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: input.email,
          message: input.message,
        }),
      });
      await send.json();
      setMessageSent(true);
    } catch (e) {
      console.log(`Error: ${e}`);
    }
  };

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const increaseSlideNum = (): void => {
    if (activeSlideNum < 3) {
      setActiveSlideNum(activeSlideNum + 1);
    } else return;
  };

  const decreaseSlideNum = (): void => {
    if (activeSlideNum > 0) {
      setActiveSlideNum(activeSlideNum - 1);
    } else return;
  };

  return (
    <div className={styles.mainCont}>
      <i className={`fa-solid fa-shuttle-space fa-6x ${styles.ship}`} />
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
          <div>
            <img className={styles.aboutPicBox} src={Headshot} alt="headshot" />
          </div>
          <div>
            Hey there! I'm a FullStack developer from Atlanta, GA. Most of my
            experience is with MERN and PERN stacks, and I have an affinity for
            back-end work. At the moment I am looking for a Junior Developer
            position
            <hr />
          </div>
          <div className={styles.aboutLinksBox}>
            <button>
              <a
                className={styles.aboutLinks}
                href="https://github.com/Furrj"
                target="_blank"
              >
                GitHub
              </a>
            </button>
            <button>
              <a
                className={styles.aboutLinks}
                href="https://www.linkedin.com/in/jackson-furr-8a124225a/"
                target="_blank"
              >
                LinkedIn
              </a>
            </button>
            <button>
              <a className={styles.aboutLinks} href={Resume} download>
                Resume
              </a>
            </button>
          </div>
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
            <img className={styles.cssLogo} src={CSS} alt="cssLogo" />
          </div>
          <div className={styles.box}>
            <img className={styles.jsLogo} src={JS} alt="jsLogo" />
          </div>
          <div className={styles.box}>
            <img className={styles.tsLogo} src={TS} alt="tsLogo" />
          </div>
          <div className={styles.box}>
            <img className={styles.nodeLogo} src={Node} alt="nodeLogo" />
          </div>
          <div className={styles.box}>
            <img className={styles.reactLogo} src={ReactLogo} alt="reactLogo" />
          </div>
          <div className={styles.box}>
            <img src={Svelte} alt="svelteLogo" />
          </div>
          <div className={styles.box}>
            <img className={styles.sqlLogo} src={SQL} alt="sqlLogo" />
          </div>
          <div className={styles.box}>
            <img src={Mongo} alt="mongoLogo" />
          </div>
          <div className={styles.box}>
            <img className={styles.dockerLogo} src={Docker} alt="dockerLogo" />
          </div>
          <div className={styles.box}>
            <img src={Git} alt="gitLogo" />
          </div>
          <div className={styles.box}>
            <img src={Figma} alt="figmaLogo" />
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
          {activeSlideNum === 3 && <Portfolio />}
          {activeSlideNum < 3 && (
            <div className={styles.portRightBtn} onClick={increaseSlideNum}>
              <i className="fa-solid fa-arrow-right" />
            </div>
          )}
        </div>
        <a href="#contact" className={styles.scrollDownBox4}>
          <div>
            <i className="fa-solid fa-arrow-down" />
          </div>
        </a>
      </div>
      <div className={styles.box5} id="contact">
        <a href="#portfolio" className={styles.scrollUpBox2}>
          <div>
            <i className="fa-solid fa-arrow-up" />
          </div>
        </a>
        <div className={styles.contactFormBox}>
          <h2>Contact</h2>
          <div className={styles.myInfo}>
            Email: Jackson.A.Furr@gmail.com
            <br />
            Cell: 678-852-1980
          </div>
          <hr />
          {!messageSent && (
            <div className={styles.contactForm}>
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={input.email}
                onChange={inputHandler}
              />
              <br />
              <textarea
                placeholder="Message"
                name="message"
                rows={5}
                value={input.message}
                onChange={inputHandler}
              ></textarea>
              <br />
              <button onClick={sendMessage}>Send</button>
            </div>
          )}
          {messageSent && (
            <div>Thank you! I will get back to you as soon as I can.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
