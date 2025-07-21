import React from "react";
import "./Hero.css";
import logo2 from "../../assets/logo2.jpg";
import { anticipate, circInOut, circOut, motion } from "motion/react";

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="hero">
      <motion.img
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1.0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: circOut }}
        whileInView={{ scale: 1.1, opacity: 1 }}
        viewport={{ once: true }}
        src={logo2}
        alt="Muskan Singh profile"
      />
      <h1>
        <motion.span
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          I'm Muskan Singh,
        </motion.span>{" "}
        frontend developer based in Kolkata.
      </h1>
      <p>
        I’m a recent Electronics and Communication Engineering (ECE) graduate
        with a strong passion for technology, innovation, and hands-on
        problem-solving. I am enthusiastic about applying my knowledge in
        real-world scenarios and thrive on building impactful projects. I'm
        eager to collaborate, learn continuously, and contribute meaningfully to
        challenging projects that push boundaries and create value. Let's build
        something great together!
      </p>
      <div className="hero-action">
        <div className="hero-connect" onClick={scrollToContact}>
          Connect with me
        </div>
        <a
          href="https://drive.google.com/file/d/1-Iu8CoZQvFaNIXw_cwauRW9HD88cW9vN/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            initial={{ y: -10, opacity: 0.8 }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hero-resume"
          >
            My resume
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
